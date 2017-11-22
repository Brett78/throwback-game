import * as PIXI from 'pixi.js';
import {SpriteSheet} from './spritesheet.js';
import {RenderSystem} from './systems/render-system.js';
import {InputSystem} from './systems/input-system.js';
import {VelocitySystem} from './systems/velocity-system.js';
import {Player} from './player.js';

export class Game
{
    constructor(width, height) {
        SpriteSheet.setBaseTexture('assets/pacman_spritesheet.png');
        this.width = width;
        this.height = height;
        this.renderer = PIXI.autoDetectRenderer(width, height);
        this.entities = [new Player()];
        this.renderSystem = new RenderSystem();
        this.inputSystem = new InputSystem();
        this.velocitySystem = new VelocitySystem();
    }

    appendToBody() {
        if(!document.body){
            document.appendChild(document.createElement('body'));
        }
        document.body.appendChild(this.renderer.view);
    }

    run() {
        this.update();
        this.renderer.render(this.renderSystem.scene);

        //TODO(Brett): Read into bind(this), see if there is a better way
        requestAnimationFrame(this.run.bind(this));
    }

    update() {
        this.inputSystem.process(this.entities);
        this.renderSystem.process(this.entities);
        this.velocitySystem.process(this.entities);
    }
}
