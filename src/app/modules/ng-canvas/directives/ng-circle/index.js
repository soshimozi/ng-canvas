const ngCircle = function () {
    return {
        restrict: 'AE',
        require: '^ngCanvas',
        scope: {
          radius: '@',
          x: '@',
          y: '@',
          z: '@',
          filled: '@',
          fillColor: '@',
          strokeStyle: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            ctrl.addCircle({x: parseInt(scope.x), y: parseInt(scope.y), radius: parseInt(scope.radius), filled: scope.filled === 'true', fillColor: scope.fillColor, stroke: scope.strokeStyle});
        }
    };        
};

ngCircle.$inject = [];
module.exports = ngCircle;