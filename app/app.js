"use strict";
var angular = require("angular");
var index_ctrl_1 = require("./index-ctrl");
require("ngRoute");
var headerCmp_1 = require("./headerCmp");
angular.module('tsApp', ['ngRoute'])
    .controller({ 'IndexCtrl': function () { return new index_ctrl_1.IndexCtrl(); } })
    .component('headerCmp', new headerCmp_1.headerCmp())
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index' });
});
angular.bootstrap(document, ['tsApp']);
//# sourceMappingURL=app.js.map