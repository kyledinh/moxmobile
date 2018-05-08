import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Content, Button, Icon, Thumbnail } from 'native-base';
let Minesweep = require('../lib/minesweep');

export default class GameMindsweep extends Component {

  constructor(props) {
    var newgame = new Minesweep();
    newgame.createGame(6,8,2);

    super(props);
    this.state = {
      game: newgame,
      row: props.row,
      col: props.col,
      bombs: props.bomb
    };
  }

  clickTile(x, y) {
    var click = this.state.game.click(x, y);
    console.log("tapped: ", x + " : " + y);
    this.forceUpdate();
  }

  resetGame(x, y) {
    var newgame = new Minesweep();
    newgame.createGame(6,8,2);

    this.setState({
      game: newgame
    });
    this.forceUpdate();
  }

  render() {
    let gamerow = (row, ydex) => {
      let out = row.map(function (tile, xdex) {
        var index = ydex + "," + xdex;
        return (
          <View key={index}>
          <Button style={{marginLeft: 0,marginRight: 8, width: 40, justifyContent:'center', alignItems: 'center'}}
            onPress={()=> { this.clickTile(xdex, ydex) }}
          >
            <Text style={{ textAlign: 'center' }}>{tile.show}</Text>
          </Button>
          </View>
        )
      }, this);
      return out;
    };

    let gameboard = this.state.game.show().map(function (row, ydex) {
      return (
        <View key={ydex} style={{flex: 1, flexDirection:'row', marginBottom: 8}}>
          {gamerow(row, ydex)}
        </View>
      );
    }, this);

    return (
      <Content>
        {gameboard}
        <Button style={{marginLeft: 0,marginRight: 8, width: 120, justifyContent:'center', alignItems: 'center'}}
          onPress={()=> { this.resetGame() }}
        >
          <Text style={{ textAlign: 'center' }}>Reset Game</Text>
        </Button>
      </Content>
    )
  }
}
