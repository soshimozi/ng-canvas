const ngCanvas = function () {
    return {
        restrict: 'AE',
        transclude: true,
        template: require('../../views/ng-canvas'),
        scope: {
          height: '@',
          width: '@',
        },
        controller: 'ngCanvasController',
        controllerAs: 'vm',
        bindToController: true, //required in 1.3+ with controllerAs        
        link: function(scope, element, attrs) {

        }
    };        
};

ngCanvas.$inject = [];
module.exports = ngCanvas;