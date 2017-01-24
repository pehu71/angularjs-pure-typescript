"use strict";
var angular = require("angular");
var index_ctrl_1 = require("./index-ctrl");
require("ngRoute");
angular.module('tsApp', ['ngRoute'])
    .controller({ 'IndexCtrl': function () { return new index_ctrl_1.IndexCtrl(); } });
angular.bootstrap(document, ['tsApp']);
//# sourceMappingURL=app.js.map