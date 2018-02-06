const ngCircle = function () {
    return {
        restrict: 'AE',
        require: '^ngCanvas',
        scope: {
          radius: '@',
          x: '@',
          y: '@',
          z: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            console.log('link inside ng-Circle')
            console.log('ctr', ctrl);
        }
    };        
};

ngCircle.$inject = [];
module.exports = ngCircle;