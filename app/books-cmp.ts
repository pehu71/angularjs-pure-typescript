import IHttpService = angular.IHttpService;

class BooksComponentController implements ng.IController {

    pageTitle:string;
    books: Array<IBook>;

    constructor (private $http: IHttpService) {
        this.pageTitle = 'Books';
    }

    getBooks() {
        this.$http.get('data/books.json')
            .then((res) => {
                this.books = <Array<IBook>>res.data['books'];
            })
    }
}

export class BooksComponent implements ng.IComponentOptions {

    controller: any;
    controllerAs: string;
    templateUrl:string;

    constructor () {
        this.controller = BooksComponentController;
        this.controllerAs = 'booksCtrl';
        this.templateUrl = 'view/books.html';
    }

}
