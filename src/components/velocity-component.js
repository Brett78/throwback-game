import {Component} from './component.js';

export class VelocityComponent extends Component
{
    constructor(dx, dy) {
        super();
        this.dx = dx;
        this.dy = dy;
    }

    name() {
        return 'velocity';
    }
}
