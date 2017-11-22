import {Component} from './component.js'
import {SpriteSheet} from '../spritesheet.js';

export class RenderComponent extends Component
{
    constructor(sprite) {
        super();
        this.id = RenderComponent.prototype.id;
        this.sprite = sprite;
        this.sprite.anchor = {x: 0.5, y: 0.5};
        RenderComponent.prototype.id++;
    }

    name() {
        'render';
    }

    updatePosition(positionComponent) {
        this.sprite.x = positionComponent.x;
        this.sprite.y = positionComponent.y;
        this.sprite.rotation = positionComponent.rotation;
    }
}

RenderComponent.prototype.id = 0;
