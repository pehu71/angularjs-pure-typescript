import * as angular from "angular"
import "ngRoute";
import {IndexCtrl} from "./index-ctrl";
import {HeaderComponent} from "./header-cmp";
import {BooksComponent} from "./books-cmp";

angular.module('tsApp', ['ngRoute'])

    .controller({'IndexCtrl': () => new IndexCtrl()})

    .component('headerCmp', new HeaderComponent()) // we must call "new" to execute the constructor

    .component('booksCmp', new BooksComponent())

    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider

            // we can route to controller using controllerAs pattern
            .when('/', {templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index'})

            // or we can route to registered component
            .when('/books', {template: '<books-cmp></books-cmp>'})
    });

angular.bootstrap(document, ['tsApp']);
