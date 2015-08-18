var MenuState = function() {};

MenuState.prototype.create = function() {
	this.game.stage.backgroundColor = '#fff';
	this.game.add.text(0, 0, 'Hello world!', {
		font: '20px Arial',
		fill: '#eee'
	});

	this.button_start = this.game.add.button(20, 20, 'beniz', this.startGame, this);
};

MenuState.prototype.update = function() {

};

MenuState.prototype.startGame = function() {
	this.game.state.start('Game');
};

module.exports = MenuState;