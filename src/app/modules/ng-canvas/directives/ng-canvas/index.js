const ngCanvas = function () {
    return {
        restrict: 'AE',
        transclude: true,
        template: "<canvas width={{vm.width}} height={{vm.height}}><div ng-transclude></div></canvas>",
        scope: {
          height: '@',
          width: '@',
        },
        controller: 'ngCanvasController',
        controllerAs: 'vm',
        replace: true,
        bindToController: true, //required in 1.3+ with controllerAs      
        
        compile: function(element, attributes){
        
            return {
                pre: function(scope, element, attributes, controller, transcludeFn){
                    console.log('element', element);
                    
                    let canvas = element[0];
                    scope.context = canvas.getContext("2d");
                    console.log('canvas', canvas);
                },
                post: function(scope, element, attributes, controller, transcludeFn){
                }
            }
        }
    };        
};

ngCanvas.$inject = [];
module.exports = ngCanvas;