'use strict';
//require('asynctrace');
//var Path = require('path');
//global.MONGOOSE_DRIVER_PATH = Path.dirname(require.resolve('grist/driver'));
//var formage = require('formage');
//var mongoose = require('mongoose');
//mongoose.connect('grist://' + __dirname + "/data");
//var models = {
//    pages: mongoose.model('pages', require('./models/pages')),
//    navigation: mongoose.model('navigation', require('./models/navigation')),
//};


var opinion = require('opinion'),
    request = require('request'),
    ua = require('universal-analytics'),
    LRU = require("lru-cache"),
    cache = LRU({ max: 10, maxAge: 1000 * 60 * 60 }),
    contactUs = require('./contact_us'),
    kzradio = require('./kzradio');


var app = opinion({
    middlewareOrder: opinion.DEFAULT_MIDDLEWARE_STACK,
    NoKeepAlive: {},
    keys: ['567154db8d2a78fd9fe83f2af46f2a8b'],
    statics: 'assets',
    render: ['templates', 'html'],
    socketio: { clientPath: '/js/socket.io.js' }
});


app.use(function* powered_by_empeeric(next) {
    this.set('X-Powered-By', 'Empeeric');
    yield next;
});


//formage.init(app, models);

app.post('/su_tcontac', contactUs.handle_request);


app.get('/snippet/cors/:id', function* () {
    this.set('Access-Control-Allow-Origin', '*');
    this.set('Access-Control-Allow-Methods', 'GET');
    this.set('Access-Control-Allow-Headers', 'Content-Type');
    this.type = 'application/javascript';
    this.body = request('https://gist.github.com/refack/' + this.params.id + '/raw');
});


app.get('/api/kzradio/current', function* () {
    this.set('Access-Control-Allow-Origin', '*');
    this.set('Access-Control-Allow-Methods', 'GET');
    this.set('Access-Control-Allow-Headers', 'Content-Type');
    this.body = yield kzradio.current;
});


app.get('/api/formage/checkVer', function* () {
    this.set('Access-Control-Allow-Origin', '*');
    this.set('Access-Control-Allow-Methods', 'GET');
    this.set('Access-Control-Allow-Headers', 'Content-Type');
    var tracker = ua('UA-15378843-1', {headers: this.req.headers, debug:true, strictCidFormat: false});
    tracker.debug(true);
    var clientVer = this.query.version;
    var ref = this.get('referrer') || 'DIRECT';
    var evt = tracker.event("formage", "ping", ref, clientVer);
    try {
        yield evt.send.bind(evt);
    } catch (err) {
        console.log(err.stack);
    }
    var branch = clientVer[0] === '3' ? 'beta' : 'latest';
    this.body = yield getFormageVer(branch);
});


var port = process.env.PORT || 80;
app.listen(port, function () {
    console.log("Server listening on %s", this._connectionKey);
});




// ============== utils ===================
function* getFormageVer(branch) {
    var CACHE_KEY = 'formage-' + branch;
    var latest = cache.get(CACHE_KEY);
    var d = Promise.defer();
    if (latest) {
        d.resolve(latest);
    } else request('http://registry.npmjs.org/formage/' + branch, function (_, __, body) {
        var ver = JSON.parse(body);
        var latest = ver.version;
        cache.set(CACHE_KEY, latest, 3600);
        d.resolve(latest);
    });
    return yield d.promise;
}
