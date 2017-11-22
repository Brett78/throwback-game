import {System} from './system.js';
import {InputComponent} from '../components/input-component.js';
import {InputHandler} from '../input-handler.js';

export class InputSystem extends System
{
    constructor() {
        super();
        this.inputHandler = new InputHandler();
    }

    process(entities) {
        const inputComponentName = new InputComponent().name();
        entities.filter(entity => entity.hasComponent(inputComponentName))
            .forEach(entity => {
                const inputComponent = entity.getComponent(inputComponentName);
                Object.keys(inputComponent.actionMappings)
                    .filter(key => this.inputHandler.isDown(key))
                    .map(key => inputComponent.actionMappings[key])
                    .forEach(action => action());
            });
    }
}
