"use strict";
var BooksComponentController = (function () {
    function BooksComponentController() {
        this.pageTitle = 'Books';
    }
    BooksComponentController.prototype.getBooks = function () {
        console.log('getBooks');
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