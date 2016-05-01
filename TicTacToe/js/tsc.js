/*
build a 2d array for the board
undefined = noXor0
-- key --
1 = computer spot
4 = user spot

-- add row/column/diagnal meanings --
if you add all boxes for a possible win and X = computer and O = User moves then
2 = XX
3 = XXX
8 = 00
13 = 000

we care a lot about 8 because that means the user is 1 move away from winning
*/
var Board = (function () {
    function Board() {
    }
    Board.prototype.addXorO = function (x, y, isPlayer1) {
        this.board[x][y] = (isPlayer1) ? 1 : 4;
    };
    Board.prototype.test = function () {
        console.log('board works');
    };
    return Board;
}());
/// <reference path="board"/>
var test1 = function () {
    console.log('hello test');
};
var board = new Board();
board.test();
