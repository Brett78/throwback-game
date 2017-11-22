import {Component} from './component.js';

export class InputComponent extends Component
{
    constructor(actionMappings){
        super();
        this.actionMappings = actionMappings;
    }

    name() {
        return 'input';
    }
}
