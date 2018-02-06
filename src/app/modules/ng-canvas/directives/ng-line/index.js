const ngLine = function () {
    return {
        restrict: 'AE',
        require: '^ngCanvas',
        scope: {
          x2: '@',
          y2: '@',
          x1: '@',
          y1: '@',
          strokeStyle: '@',
          z: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            ctrl.addLine({x1: parseInt(scope.x1), y1: parseInt(scope.y1), x2: parseInt(scope.x2), y2: parseInt(scope.y2), stroke: scope.strokeStyle});
        }
    };        
};

ngLine.$inject = [];
module.exports = ngLine;