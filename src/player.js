import {Entity} from './entity.js';
import {PositionComponent} from './components/position-component.js';
import {InputComponent} from './components/input-component.js';
import {RenderComponent} from './components/render-component.js';
import {VelocityComponent} from './components/velocity-component.js';
import {AnimationComponent} from './components/animation-component.js';


export class Player extends Entity
{
    constructor() {
        super();
        const position = new PositionComponent(320, 240, 0);
        const animation = new AnimationComponent();
        const render = new RenderComponent(36, 217, 30, 30);
        const actions = {
            'ArrowDown': function() {
                if(position.rotation == 0 || position.rotation == Math.PI){
                    position.rotation = (90*Math.PI) / 180;
                }
            },
            'ArrowUp': function() {
                if(position.rotation == 0 || position.rotation == Math.PI){
                    position.rotation = (270*Math.PI) / 180;
                }
            },
            'ArrowRight': function() {
                if(position.rotation == (90*Math.PI) / 180 || position.rotation == (270*Math.PI) / 180){
                    position.rotation = 0;
                }
            },
            'ArrowLeft': function() {
                if(position.rotation == (90*Math.PI) / 180 || position.rotation == (270*Math.PI) / 180){
                    position.rotation = Math.PI;
                }
            }
        };
        const input = new InputComponent(actions);
        const velocity = new VelocityComponent(1, 1);
        this.addComponent(render);
        this.addComponent(position);
        this.addComponent(input);
        this.addComponent(velocity);
    }
}
