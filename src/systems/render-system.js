import * as PIXI from 'pixi.js';
import {System} from './system.js';
import {RenderComponent} from '../components/render-component.js';
import {PositionComponent} from '../components/position-component.js';


export class RenderSystem extends System
{
    constructor() {
        super();
        this.scene = new PIXI.Container();
    }

    process(entities) {
        const renderComponentName = new RenderComponent().name();
        const positionComponentName = new PositionComponent().name();
        entities
            .filter(entity => entity.hasComponent(renderComponentName))
            .filter(entity => entity.hasComponent(positionComponentName))
            .forEach(entity => {
                const renderComponent = entity.getComponent(renderComponentName);
                const position = entity.getComponent(positionComponentName);
                renderComponent.updatePosition(position); 
                this.scene.addChildAt(renderComponent.sprite, renderComponent.id);
            });
    }
}
