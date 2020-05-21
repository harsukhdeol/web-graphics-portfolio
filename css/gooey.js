let canvas, ctx, render, init, blob;

class Blob {
    constructor() {
        this.points = []
    }
    init() {
        for (let i = 0; i < this.numPoints; i++) {
            let point = new Point(this.divisional * (i + 1), this)
            this.push(point);
        }
    }
    render() {
        let canvas = this.canvas;
        let ctx = this.ctx;
        let position = this.position;
        let pointsArray = this.points;
        let radius = this.radius;
        let points = this.numPoints;
        let divisional = this.divisional;
        let center = this.center;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // pointsArray[0].
    }
}
class Point {
    constructor(azimuth, parent) {
        this.parent = parent;
        this.azimuth = Math.PI - azimuth;
        this._components = {
            x: Math.cos(this.azimuth),
            y: Math.sin(this.azimuth)
        };

        this.acceleration = -0.3 + Math.random() * 0.6;
    }
    solveWith(leftPoint, rightPoint) {
        // this.acceleration = (-0.3*this.radialEffect+())
    }
    set acceleration(value) {
        if (typeof value == 'number') {
            this._acceleration = value;
            this.speed += this._acceleration * 2;
        }
    }
    get acceleration() {
        return this._acceleration || 0;
    }

    set speed(value) {
        if (typeof value == 'number') {
            this._speed = value;
            this.radialEffect += this._speed * 5;
        }
    }
    get speed() {
        return this._speed || 0;
    }
    set radialEffect(value) {
        if (typeof value == "number") {
            this._radialEffect = value;
        }
    }
    get radialEffect() {
        return this._radialEffect || 0;
    }
    get position() {
        return {
            x: this.parent.center.x
        }
    }
}
//blob = new Blob;
init = function () {
    canvas = document.createElement('canvas');
    canvas.setAttribute('touch-action', 'none');

    document.body.appendChild(canvas);

    let resize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();


}
init()