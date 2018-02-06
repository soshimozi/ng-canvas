const angular = require('angular');

const app = angular.module('ng-canvas-module', []);

import CanvasController from './controllers/ng-canvas-controller';
app.controller('ngCanvasController', CanvasController)

app.directive('ngCanvas', require('./directives/ng-canvas')); 
app.directive('ngCircle', require('./directives/ng-circle'));
app.directive('ngLine', require('./directives/ng-line'));
app.directive('ngPixel', require('./directives/ng-pixel'));
app.directive('ngRectangle', require('./directives/ng-rectangle'));
app.directive('ngPolygon', require('./directives/ng-polygon'));


