/* global Vector */

const angular = require('angular');

require('angular-route');
require('angular-ui-bootstrap');
require('jquery/dist/jquery');

require('./modules/ng-canvas');

import '../../node_modules/bootstrap/dist/css/bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme';
import '../../node_modules/font-awesome/css/font-awesome.css';

const app = angular.module('ng-canvas-app', [
    'ngRoute',
    'ui.bootstrap',
    'ng-canvas-module'
]);

app.controller('Main-Controller', function() {
   console.log('Vector: ', Vector.create([6,2,9])); 
});