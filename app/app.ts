import * as angular from "angular"
import {IndexCtrl} from "./index-ctrl";
import "ngRoute";
import {headerCmp} from "./headerCmp";

angular.module('tsApp', ['ngRoute'])

    .controller({'IndexCtrl': () => new IndexCtrl()})

    .component('headerCmp', new headerCmp())

    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
            .when('/', {templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index'})
    });

angular.bootstrap(document, ['tsApp']);
