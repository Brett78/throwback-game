import {Component} from './component.js';

export class PositionComponent extends Component
{
    constructor(x, y, rotation) {
        super();
        this.x = x;
        this.y = y;
        this.rotation = rotation;
    }

    name() {
        return 'position';
    }
}
