"use strict";
var angular = require("angular");
require("ngRoute");
var index_ctrl_1 = require("./index-ctrl");
var header_cmp_1 = require("./header-cmp");
var books_cmp_1 = require("./books-cmp");
angular.module('tsApp', ['ngRoute'])
    .controller({ 'IndexCtrl': function () { return new index_ctrl_1.IndexCtrl(); } })
    .component('headerCmp', new header_cmp_1.HeaderComponent()) // we must call "new" to execute the constructor
    .component('booksCmp', new books_cmp_1.BooksComponent())
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index' })
        .when('/books', { template: '<books-cmp></books-cmp>' });
});
angular.bootstrap(document, ['tsApp']);
//# sourceMappingURL=app.js.map