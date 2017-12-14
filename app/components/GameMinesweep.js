import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Content, Button, Icon, Thumbnail } from 'native-base';
let Minesweep = require('../lib/minesweep');

export default class GameMindsweep extends Component {

    constructor(props) {
        var newgame = new Minesweep();
        newgame.createGame(6,8,2);

        super(props);
        this.state={
            game: newgame,
            row: props.row,
            col: props.col,
            bombs: props.bomb
        }
    }

    componentDidMount() {

    }

    render() {

        let gamerow = (row, ydex) => {
            let out = row.map(function (tile, xdex) {
                var index = ydex + "," + xdex;
                return (
                    <View key={index}>
                    <Button style={{marginLeft: 4,marginRight: 4, width: 40 }} ><Text style={{ textAlign: 'center' }}>{tile.show}</Text></Button>
                    </View>
                )
            });
            return out;
        };

        let gameboard = this.state.game.show().map(function (row, ydex) {
            return (
                <Card key={ydex} style={{flex: 1, flexDirection:'row'}}>
                    {gamerow(row, ydex)}
                </Card>
            );
        });

        return (
            <Content>
                {gameboard}
            </Content>
        )
    }
}
