var GameState = function() {};

GameState.prototype.create = function() {
	this.game.stage.backgroundColor = '#900';
	this.game.add.text(0, 0, 'LOL I TROL U', {
		font: '20px Arial',
		fill: '#fff'
	});
};

GameState.prototype.update = function() {

};

module.exports = GameState;