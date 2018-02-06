export default class {
    
    constructor($scope, $element) {
       this.shapes = [];
       
       console.log('scope:', $scope);
       console.log('element', $element);

       this.canvas = $element.find("canvas")[0];
       console.log('canvas', this.canvas);
       this.context = this.canvas.getContext("2d");

       $scope.$watch('shapes.length', () => this.refreshScreen());
    }

    refreshScreen() {
         var ctx = this.context;
         
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.strokeStyle="red";
ctx.stroke();

        console.log('should see a line in canvas');
    }
    
    addShape(shapeType, shape) {
        this.shapes.push({shapeType: shapeType, shape: shape})
    }
    
    addRectangle(rect) {
        this.addShape('rectangle', rect);
    }
    
    addCircle(circ) {
        this.addShape('circle', circ);
    }

    addLine(line) {
        this.addShape('line', line);
    }
    
    addPixel(pix) {
        this.addShape('pixel', pix);
    }
    
    addPolygon(poly) {
        this.addShape('polygon', poly);
    }
}