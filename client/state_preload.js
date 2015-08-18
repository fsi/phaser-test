var PreloadState = function() {};

PreloadState.prototype.preload = function() {
	this.load.image('beniz', require('./img/beniz.png'));
};

PreloadState.prototype.create = function() {
	this.game.state.start('MainMenu');
};

module.exports = PreloadState;