const angular = require('angular');

const app = angular.module('ng-canvas-module', []);

app.directive('ng-canvas', require('./directives/ng-canvas')); 
app.directive('ng-circle', require('./directives/ng-circle'));
app.directive('ng-line', require('./directives/ng-line'));
app.directive('ng-pixel', require('./directives/ng-pixel'));
app.directive('ng-rectangle', require('./directives/ng-rectangle'));
app.directive('ng-polygon', require('./directives/ng-polygon'));
