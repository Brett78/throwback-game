import {Game} from './game.js';

const game = new Game(640, 480);
game.appendToBody();

window.onload = () => game.run();
