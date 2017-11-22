import {Component} from './component.js';


export class AnimationComponent extends Component
{
    //TODO: add property for a list of frames which will be a list of sprites
    //TODO: Also need some kind of index of current sprite
    //TODO: also need some kind of callback to know how and when to animate
    //TODO: Maybe an event system?

    name() {
        return 'animation';
    }
}
