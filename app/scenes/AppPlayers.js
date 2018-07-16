import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, H3, Icon, Left, Picker, Right, Thumbnail, Title } from 'native-base';
import NavigationService from '../../NavigationService';
import { connect } from 'react-redux';
import AvatarPerson from '../components/AvatarPerson';

class AppPlayers extends Component {

  static navigationOptions = {
    title: 'Players',
  };

  render() {

    function navAppPlayer(data) {
      NavigationService.navigate('Player', {'player':data});
    }

    let { players, isFetching } = this.props.players;

    let playersBlock = players.map(function (player, index) {
      return (
        <Card key={index}>
          <CardItem button onPress={()=> {navAppPlayer(player)}}>
            <Left>
              <AvatarPerson/>
              <Body>
                <H3>{player.name}</H3>
                <Text>( {player.id} )</Text>
                <Text>Thursday Night League</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-trophy" />
                <Text> {player.wins} Wins</Text>
                <Icon active name="ios-ribbon" style={{marginLeft:8}}/>
                <Text> {player.points} Points</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text></Text>
              </Button>
            </Body>
            <Right>
              <Text>{player.skill}</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Content style={{marginTop:0}}>
          {playersBlock}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players
});

const mapDispatchToProps = (dispatch) => ({
  getPlayers: () => dispatch(fetchPlayersFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppPlayers);
