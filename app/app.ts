import * as angular from "angular"
import {IndexCtrl} from "./index-ctrl";
import "ngRoute";

angular.module('tsApp', ['ngRoute'])

    .controller({'IndexCtrl': () => new IndexCtrl()})

    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
            .when('/', {templateUrl: 'view/index.html', controller: 'IndexCtrl', controllerAs: 'index'})
    });

angular.bootstrap(document, ['tsApp']);
