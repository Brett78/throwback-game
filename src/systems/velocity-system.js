import {System} from './system.js';
import {VelocityComponent} from '../components/velocity-component.js';
import {PositionComponent} from '../components/position-component.js';

export class VelocitySystem extends System
{
    process(entities) {
        const velocityName = new VelocityComponent(0, 0).name();
        const positionName = new PositionComponent(0, 0, 0).name();
        entities
            .filter(entity => entity.hasComponent(velocityName))
            .filter(entity => entity.hasComponent(positionName))
            .forEach(entity => {
                const velocity = entity.getComponent(velocityName);
                const position = entity.getComponent(positionName);

                if(position.rotation == 0){
                    if(velocity.dx < 0){
                        velocity.dx *= -1;
                    }
                    position.x += velocity.dx;
                }

                if(position.rotation == Math.PI){
                    if(velocity.dx > 0){
                        velocity.dx *= -1;
                    }
                    position.x += velocity.dx;
                }

                if(position.rotation == (90*Math.PI) / 180) {
                    if(velocity.dy < 0){
                        velocity.dy *= -1;
                    }
                    position.y += velocity.dy;
                }

                if(position.rotation == (270*Math.PI) / 180) {
                    if(velocity.dy > 0){
                        velocity.dy *= -1;
                    }
                    position.y += velocity.dy;
                }
            });
    }
}
