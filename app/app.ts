import * as angular from "angular"
import "ngRoute";
import {IndexCtrl} from "./index-ctrl";
import {headerCmp} from "./header-cmp";
import {booksCmp} from "./books-cmp";

angular.module('tsApp', ['ngRoute'])

    .controller({'IndexCtrl': () => new IndexCtrl()})

    .component('headerCmp', new headerCmp()) // we must call "new" to execute the constructor

    .component('booksCmp', new booksCmp())

    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider

            // we can either route on controller using controllerAs pattern
            .when('/', {templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index'})

            // or we can route on registered component
            .when('/books', {template: '<books-cmp></books-cmp>'})
    });

angular.bootstrap(document, ['tsApp']);
