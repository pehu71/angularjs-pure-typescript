import * as angular from "angular"
import {IndexCtrl} from "./index-ctrl";


angular.module('tsApp', [])
    .controller({'IndexCtrl': () => new IndexCtrl()});
angular.bootstrap(document, ['tsApp']);
