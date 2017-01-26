import IHttpService = angular.IHttpService;

class BooksComponentController implements ng.IController {

    pageTitle:string;
    books: Array<IBook>;
    selectedBook: IBook;
    $onInit: any;

    constructor (private $http: IHttpService) {
        this.pageTitle = 'Books';
        this.$onInit = () => {
            this.getBooks();
        }
    }

    selectBook(bookId: number) {
        this.selectedBook = this.books.filter((b) => b.id == bookId)[0];
    }

    private getBooks() {
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
