'use strict';
global._ = require('lodash');
require('lodash-contrib');
global.chai = require('chai');
global.expect = require('chai').expect;
require('nodestrum');
Error.stackTraceLimit = 100;
chai.config.includeStack = true;

//noinspection JSUnusedLocalSymbols
global.mock_req_proto = {
    params: {},
    query: {},
    headers: {},
    connection: {},
    admin_user: {hasPermissions: function (model, action) {return true}}
};


function magic_throw() {
    if (process.domain) process.domain.dispose();
    var arg_str = JSON.stringify(arguments, null, 2);
    process.nextTick(function () {
        throw new Error(arg_str);
    });
}


global.mock_res_proto = {
    setHeader: function () {},
    status: function (val) {this._status = val;},
    output: {push: _.identity},
    outputEncodings: {push: _.identity},
    render: magic_throw,
    redirect: magic_throw
};


global.makeRes = function makeRes(req, done) {
    var res = _.defaults({ req: req }, mock_res_proto);
    res.send = function (status, err) {done(err);};
    return res;
};

global.proxyquire = function () { arguments[0] = '../' + arguments[0]; require('proxyquire').apply(this, arguments) };
