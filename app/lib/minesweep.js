/*
 * Updated by Kyle Dinh, 2017.
 * https://github.com/kyledinh/npm-minesweep
 */

var APP = APP || {};

APP.Minesweep = function (mode) {
    'use strict';

    var LOG_LEVEL = (typeof mode !== 'undefined') ? mode : null;
    var logger = function () {
        if (LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'INFO' ||
            APP.LOG_LEVEL === 'DEBUG' || APP.LOG_LEVEL === 'INFO') {
            var i, msg = "";
            for (i = 0; i < arguments.length; i++) { msg += arguments[i]; }
            console.log(LOG_LEVEL, msg);
        }
    };

    var currentGame;
    var STATUS = {
        UNKNOWN : "UNKNOWN",
        CHECKED : "CHECKED",
        CLICKED : "CLICKED",
        BOMB : "BOMB"
    };

    var RESPONSE = {
        OK : "OK",
        INVALID : "INVALID",
        BOMB : "BOMB",
        GAMEOVER : "GAMEOVER"
    };

    // Tile
    // status: UNKNOWN | CHECKED | CLICKED | BOMB
    var Tile = function (status, touch, x, y) {
        this.status = status || STATUS.UNKNOWN;
        this.touch = touch || 0;
        this.x = x;
        this.y = y;
    }

    Tile.prototype.print = function () {
        console.log(this.x + ", " + this.y + " " + this.status);
    };

    Tile.prototype.cheat = function () {
        var out = this.touch || '=';
        if (this.touch !== 'undefined') { out = this.touch; }
        if (this.status === STATUS.BOMB) { out = '*'; }
        return out;
    };

    Tile.prototype.show = function () {
        var out = '=';
        if ((this.status === STATUS.CHECKED) && (this.touch > 0)) { out = this.touch; }
        if ((this.status === STATUS.CHECKED) && (this.touch === 0)) { out = " "; }
        if ((this.status === STATUS.CLICKED)) { out = this.touch; }
        return out;
    };

    Tile.prototype.updateTouch = function(cnt) {
        if (this.status !== STATUS.BOMB) {
            this.touch = cnt;
        }
    };

    // Grid
    function Grid(x, y) {
        this.x = x;
        this.y = y;
        this.tiles = null;
    }

    Grid.prototype.setup = function () {
        var i, j, arr = [this.x];
        for (i=0; i < this.x; i++) {
            arr[i] = [this.y];
        }
        this.tiles = arr;
        for (i=0; i < this.x; i++) {
            for (j=0; j < this.y; j++) {
                this.tiles[i][j] = new Tile(STATUS.UNKNOWN, 0, i, j);
            }
        }
    };

    //Console log the state of the Grid
    Grid.prototype.cheat = function () {
        var i, j;
        var out = [];
        var header = "        ";
        if (this.y > 10) { header = header + " "; }
        for (i=0; i < this.x; i++) {
            header = header + i + "  ";
            if (i < 10) { header += " "; }
        }
        console.log(header);
        for (j=0; j < this.y; j++) {
            var dsp = (j < 10) ? "row  " + j + " :" : "row " + j + " :";
            for (i=0; i < this.x; i++) {
                dsp = dsp + "[" + this.tiles[i][j].cheat() + "] ";
                if (this.tiles[i][j].status === STATUS.BOMB) {
                    out.push({x: i, y: j, show: this.tiles[i][j].cheat()});
                }
            }
            console.log(dsp);
        }
        return out;
    };

    //Console log the state of the Grid
    Grid.prototype.show = function () {
        var i, j;
        var out = [];
        var header = "        ";
        if (this.y > 10) { header += " "; }
        for (i=0; i < this.x; i++) {
            header = header + i + "  ";
            if (i < 10) { header += " "; }
        }
        console.log(header);
        for (j=0; j < this.y; j++) {
            var row = [];
            var dsp = (j < 10) ? "row  " + j + "  " : "row " + j + "  ";
            for (i=0; i < this.x; i++) {
                dsp = dsp + "[" + this.tiles[i][j].show() + "] ";
                row.push({x: i, y: j, show: this.tiles[i][j].show()});
            }
            out.push(row);
            console.log(dsp);
       }
       return out;
    };

    //Switch some Tiles to Bomb tiles
    Grid.prototype.layBombs = function (numBombs) {
        var i;
        var bombArr = [];
        var size = this.x * this.y;
        for (i=0; i < size; i++) {
            bombArr.push(i);
        }
        bombArr = shuffleArray(bombArr);
        for (i=0; i < numBombs; i++) {
            var bomb = bombArr.pop();
            var row = Math.floor(bomb / this.x);
            var mod = bomb % this.x;
            this.tiles[mod][row].status = STATUS.BOMB;
        }
    };

    Grid.prototype.isInBounds = function (x, y) {
        //console.log("checking InBound " + x + ", " + y);
        if ((x < 0) || (x >= this.x)) { return false; }
        if ((y < 0) || (y >= this.y)) { return false; }
        return true;
    };

    // Updates the tile's touch field with # of bombs that are adjacent
    Grid.prototype.updateTiles = function () {
        var i, j;
        for (j=0; j < this.y; j++) {    // row
            for (i=0; i < this.x; i++) { // col
                var cnt = 0;
                if (this.isInBounds(i -1,j -1)) { if (this.tiles[i -1][j -1].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i   ,j -1)) { if (this.tiles[i   ][j -1].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i +1,j -1)) { if (this.tiles[i +1][j -1].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i -1,j   )) { if (this.tiles[i -1][j   ].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i +1,j   )) { if (this.tiles[i +1][j   ].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i -1,j +1)) { if (this.tiles[i -1][j +1].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i   ,j +1)) { if (this.tiles[i   ][j +1].status === STATUS.BOMB) {cnt++;} }
                if (this.isInBounds(i +1,j +1)) { if (this.tiles[i +1][j +1].status === STATUS.BOMB) {cnt++;} }
                logger("updatingTouch " + i + ", " + j + " with " + cnt);
                this.tiles[i][j].updateTouch(cnt);
            }
        }
    };

    Grid.prototype.stringifyTiles = function () {
        var i, j, arr = [];
        for (j=0; j < this.y; j++) {     // row
            for (i=0; i < this.x; i++) { // col
                arr.push(this.tiles[i][j]);
            }
        }
        return JSON.stringify(arr);
    }

    Grid.prototype.parseTiles = function (str) {
        var arr = JSON.parse(str);
        var i, n = arr.length;
        for (i=0; i < n; i++) {
            this.tiles[arr[i].x][arr[i].y] = new Tile(arr[i].status, arr[i].touch, arr[i].x, arr[i].y);
        }
    }

    Grid.prototype.listTileByStatus = function (status) {
        var i, j, arr = [];
        for (j=0; j < this.y; j++) {     // row
            for (i=0; i < this.x; i++) { // col
                if (this.tiles[i][j].status === status) {
                    arr.push({
                        x: this.tiles[i][j].x,
                        y: this.tiles[i][j].y,
                    });
                }
            }
        }
        return arr;
    }

    /*
     * Game object
     */

     function Game(x, y) {
         this.grid = new Grid(x, y);
         this.moves = 0;
         this.numBombs;
         this.state;
         this.name;
         this.id;
         this.action;
     }

     Game.prototype.click = function (x, y) {
         if (this.grid.isInBounds(x,y) === false) {
             console.log("Invalid click: It's off the grid, please select again!");
             return RESPONSE.INVALID;
         }
         this.moves = this.moves +1;
         console.log("x: ", x, "y: ", y);
         if (this.grid.tiles[x][y].status === STATUS.BOMB) {
             console.log("YOU HIT A BOMB!!!");
             return RESPONSE.BOMB;
         }

         //passed invalid or bomb; process click
         this.grid.tiles[x][y].status = STATUS.CLICKED;

         var tile, checkArr = [];
         if (this.grid.tiles[x][y].touch === 0) {
             checkArr.push(this.grid.tiles[x][y]);
         }
         //while ((tile = checkArr.pop()) !== undefined) {
         while (checkArr.length > 0) {
             tile = checkArr.pop();
             var i = tile.x;
             var j = tile.y;
             tile.status = STATUS.CHECKED;
             //2D Array, looping through neighbors
             if (this.grid.isInBounds(i -1,j -1)) { checkZeroAndPush(this.grid.tiles[i -1][j -1], checkArr); }
             if (this.grid.isInBounds(i   ,j -1)) { checkZeroAndPush(this.grid.tiles[i   ][j -1], checkArr); }
             if (this.grid.isInBounds(i +1,j -1)) { checkZeroAndPush(this.grid.tiles[i +1][j -1], checkArr); }
             if (this.grid.isInBounds(i -1,j   )) { checkZeroAndPush(this.grid.tiles[i -1][j   ], checkArr); }
             if (this.grid.isInBounds(i +1,j   )) { checkZeroAndPush(this.grid.tiles[i +1][j   ], checkArr); }
             if (this.grid.isInBounds(i -1,j +1)) { checkZeroAndPush(this.grid.tiles[i -1][j +1], checkArr); }
             if (this.grid.isInBounds(i   ,j +1)) { checkZeroAndPush(this.grid.tiles[i   ][j +1], checkArr); }
             if (this.grid.isInBounds(i +1,j +1)) { checkZeroAndPush(this.grid.tiles[i +1][j +1], checkArr); }
         }
         return RESPONSE.OK;
    };

    Game.prototype.start = function (numBombs) {
        this.numBombs = numBombs || 8;
        this.grid.setup();
        this.grid.layBombs(this.numBombs);
        this.grid.updateTiles();
    };

    Game.prototype.show = function () {
        console.log("show:");
        return this.grid.show();
    };

    Game.prototype.cheat = function () {
        console.log("cheat view:");
        return this.grid.cheat();
    };

    Game.prototype.listFreeSpaces = function () {
        return this.grid.listTileByStatus(STATUS.UNKNOWN);
    };

    Game.prototype.stringify = function () {
        var obj = new Game(this.grid.x, this.grid.y);
        obj.grid = this.grid.stringifyTiles();
        obj.moves = this.moves;
        obj.numBombs = this.numBombs;
        obj.name = this.name;
        obj.state = this.state;
        obj.id = this.id;
        obj.action = this.action;
        return JSON.stringify(obj);
    };

    // LIBRARY

    // if this tile is newly discovered as a '0' adjencent tile; push it to the array of tiles to check
    function checkZeroAndPush (tile, arr) {
        if ((tile.touch === 0) && (tile.status !== STATUS.CHECKED) && (tile.status !== STATUS.CLICKED) && (tile.status !== STATUS.BOMB)) {
            tile.status = STATUS.CHECKED;
            arr.push(tile);
            logger("pushing to checkArr: " + tile.x + ", " + tile.y);
        }
        if ((tile.touch > 0) && (tile.status !== STATUS.BOMB) && (tile.status !== STATUS.CLICKED)) {
            tile.status = STATUS.CHECKED;
            logger("marked adjacent : " + tile.x + ", " + tile.y);
        }
    }

    var shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

	//PUBLIC METHODS
    var createGame = function (x, y, numBombs) {
        this.currentGame = new Game(x, y);
        this.currentGame.start(numBombs);
        this.currentGame.show();
    };
    var show = function () {
        return this.currentGame.show();
    };
    var click = function (x, y) {
        return this.currentGame.click(x, y);
    };
    var cheat = function () {
        return this.currentGame.cheat();
    };
    var freeSpaces = function () {
        return this.currentGame.listFreeSpaces();
    }
    var randomFreeSpace = function () {
        var arr = this.currentGame.listFreeSpaces();
        if (arr.length > 0) {
            return shuffleArray(arr).pop();
        }
        return RESPONSE.INVALID;
    }

	return {
		createGame : createGame,
        show : show,
        click : click,
        cheat : cheat,
        freeSpaces : freeSpaces,
        randomFreeSpace : randomFreeSpace
	}
};

if (typeof module !== 'undefined') {
    module.exports = function (mode) {
    	for (var i = 0; i < arguments.length; i++) {
    		console.log("ARGS : ",arguments[i]);
    	}
    	return (typeof mode === 'undefined') ? new APP.Minesweep('PROD') : new APP.Minesweep(mode);
    };
}
