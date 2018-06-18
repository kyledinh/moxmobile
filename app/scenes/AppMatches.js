import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, H3, Icon, Left, Picker, Right, Thumbnail, Title } from 'native-base';
import GameMinesweep from '../components/GameMinesweep';

import NavigationService from '../../NavigationService';
import { connect } from 'react-redux';
import { fetchMatchesFromAPI } from '../redux/actions';

class AppMatches extends Component {

  static navigationOptions = {
    title: 'Matches'
  };

  minesweepBlock = () => {
    return (
      <Card>
        <CardItem>
          <H3>Minesweep Game</H3>
        </CardItem>
        <CardItem>
          <GameMinesweep row="6" col="8" bombs="3"/>
        </CardItem>
      </Card>
    );
  };

  render() {

    function navAppMatch(data) {
      NavigationService.navigate('Match', { match: data });
    }

    let { matches, isFetching } = this.props.matches;
    let matchesBlock = matches.map(function (match, index) {

      return (
        <Card key={index}>
          <CardItem button onPress={()=> {navAppMatch(match)}}>
            <Left>
              <Thumbnail source={require('../img/avatar-3.png')} />
              <Body>
                <H3>Match Name</H3>
                <Text>match date</Text>
                <Text>Thursday Night League</Text>
            </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-trophy" />
                <Text> Wins</Text>
                <Icon active name="ios-ribbon" style={{marginLeft:8}}/>
                <Text> Points</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text></Text>
              </Button>
            </Body>
            <Right>
              <Text>Status: Open</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container>
        <Content style={{marginTop:0}}>
          <Button block info style={{marginLeft:8, marginRight:8, marginTop: 8}} onPress={() => this.props.getMatches()}>
            <Text>Reset Matches</Text>
          </Button>
          {matchesBlock}
          { this.minesweepBlock() }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.matches
});

const mapDispatchToProps = (dispatch) => ({
  getMatches: () => dispatch(fetchMatchesFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMatches);
