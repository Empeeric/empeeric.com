"use strict";
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SchemaTypes = Schema.Types,
    ObjectId = SchemaTypes.ObjectId;


var schema = new Schema({
//    parent: { type: ObjectId, ref: 'navigation' },
//    main: { type: ObjectId, ref: 'pages', inline:true },
    others: [{ type: ObjectId, ref: 'pages', inline:true }],
    meta: [{
        name: { type: String },
        content: { type: SchemaTypes.Text }
    }],
    meta1: [String],
    embeded: {
        str1: String,
        str2: String
    },
//    label: { type: String, required: true, trim: true },
    html_title: { type: String, required: true, trim: true },
    url: { type: String, trim: true, lowercase: true, unique: true },
//    order: { type: Number, editable: false },
//    isMenu: { type: Boolean, 'default': true },
    isShow: { type: Boolean, 'default': true }
});

schema.formage = {
    list_populate: ['parent', 'main', 'others'],
    list: ['title', 'parent', 'main', 'url', 'menu', 'show'],
    filters: ['parent'],
    order_by: ['order'],
    sortable: 'order'
};

schema.methods.toString = function() {
    return this.html_title;
};

module.exports = schema;
