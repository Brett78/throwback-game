import * as PIXI from 'pixi.js';

export class SpriteSheet
{
    static getSprite(x, y, width, height) {
        const texture = SpriteSheet.getTexture(new PIXI.Rectangle(x, y, width, height));
        return new PIXI.Sprite(texture);
    }

    static getTexture(rect) {
        return new PIXI.Texture(SpriteSheet.prototype.baseTexture, rect);
    }

    static setBaseTexture(filename) {
        this.prototype.baseTexture = PIXI.BaseTexture.fromImage(filename);
    }
}
