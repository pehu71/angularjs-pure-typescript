"use strict";
var BooksComponentController = (function () {
    function BooksComponentController($http) {
        this.$http = $http;
        this.pageTitle = 'Books';
    }
    BooksComponentController.prototype.getBooks = function () {
        var _this = this;
        this.$http.get('data/books.json')
            .then(function (res) {
            _this.books = res.data['books'];
        });
    };
    return BooksComponentController;
}());
var BooksComponent = (function () {
    function BooksComponent() {
        this.controller = BooksComponentController;
        this.controllerAs = 'booksCtrl';
        this.templateUrl = 'view/books.html';
    }
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books-cmp.js.map