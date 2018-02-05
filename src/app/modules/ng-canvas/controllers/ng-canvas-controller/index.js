export default class {
    
    constructor($scope) {
       this.shapes = [];
       
       console.log('scope:', $scope);
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