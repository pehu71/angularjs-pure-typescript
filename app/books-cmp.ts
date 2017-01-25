class BooksComponentController implements ng.IController {

    pageTitle:string;

    constructor () {
        this.pageTitle = 'Books';
    }

    getBooks() {
        console.log('getBooks');
    }
}

export class BooksComponent implements ng.IComponentOptions {

    templateUrl:string;
    controller: any;
    controllerAs: string;

    constructor () {
        this.controller = BooksComponentController;
        this.controllerAs = 'booksCtrl';
        this.templateUrl = 'view/books.html';
    }

}
