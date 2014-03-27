'use strict';
describe("current", function () {
    before(function () {
        this.kzradio = require('../kzradio');
    });

    after(function () {});

    it('show fetch current', function (done) {
        this.kzradio.current(function (show) {
            console.log(show);
            done();
        });
    });
});
