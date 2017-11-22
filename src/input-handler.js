export class InputHandler
{
    constructor() {
        this.keyDown = {};
        window.addEventListener('keydown', (event) => this.keyDown[event.key] = true);
        window.addEventListener('keyup', (event) => this.keyDown[event.key] = false);
    }

    isDown(key) {
        return this.keyDown[key] || false;
    }
}
