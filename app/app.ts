import * as angular from "angular"
import {IndexCtrl} from "./index-ctrl";
import "ngRoute";

angular.module('tsApp', ['ngRoute'])

    .controller({'IndexCtrl': () => new IndexCtrl()});

angular.bootstrap(document, ['tsApp']);
