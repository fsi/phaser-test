var Phaser = require('phaser');

// game states
var PreloadState = require('./state_preload.js');
var MenuState = require('./state_menu.js');
var GameState = require('./state_game.js');

var game = new Phaser.Game(640, 400, Phaser.AUTO, '');
game.state.add('Preload', PreloadState);
game.state.add('MainMenu', MenuState);
game.state.add('Game', GameState);
game.state.start('Preload');