/* global angular */

export default class {
    
    constructor($scope, $element) {
       this.shapes = [];
       
       $scope.$watchCollection('shapes.length', () => this.refreshScreen());
       
       this.scope = $scope;
    }

    refreshScreen() {
        console.log('refresh screem');
    

        let functions = {
            line: (s) => this.drawLine(s),
            rectangle: (s) => this.drawRectangle(s),
            circle: (s) => this.drawCircle(s)
        }
        
        for(let si in this.shapes) {
            let shape = this.shapes[si];
            functions[shape.shapeType](shape.shape);
        }
    }
    
    drawRectangle(sh) {
        let ctx = this.scope.context;
        
        ctx.rect(sh.x,sh.y,sh.w,sh.h);
        ctx.stroke();        
    }
    
    drawLine(sh) {
        let ctx = this.scope.context;
        
        ctx.beginPath();
        
        if(!angular.isUndefined(sh.stroke)) {
            ctx.strokeStyle = sh.stroke;
        } else {
            ctx.strokeStyle = "black"; // default?
        }
        
        ctx.moveTo(sh.x1,sh.y1);
        ctx.lineTo(sh.x2,sh.y2);
        ctx.closePath();
        ctx.stroke();        
    }
    
    drawCircle(sh) {
        let ctx = this.scope.context;
        
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, sh.radius, 0, 2 * Math.PI, false);
        
        if(!angular.isUndefined(sh.stroke)) {
            ctx.strokeStyle = sh.stroke;
        } else {
            ctx.strokeStyle = "black"; // default?
        }
        
        if(sh.filled && !angular.isUndefined(sh.fillColor)) {
            ctx.fillStyle = sh.fillColor;
        } else if(sh.filled) {
            ctx.fillStyle = "black"; // default?
        }
        
        if(sh.filled) {
            ctx.fill();
        }
        
        ctx.stroke();        
    }
    
    addShape(shapeType, shape) {
        this.shapes.push({shapeType: shapeType, shape: shape})
    }
    
    addRectangle(rect) {
        this.addShape('rectangle', rect);
    }
    
    addCircle(circ) {
        console.log('adding circle', circ);
        this.addShape('circle', circ);
    }

    addLine(line) {
        console.log('adding line', line);
        this.addShape('line', line);
    }
    
    addPixel(pix) {
        this.addShape('pixel', pix);
    }
    
    addPolygon(poly) {
        this.addShape('polygon', poly);
    }
}