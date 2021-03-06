import React, { Component } from 'react';
import NavigationService from '../../NavigationService';
import { connect } from 'react-redux';
import { Badge, Body, Button, Card, CardItem, Container, Content, H3, Header,
  Icon, Left, List, ListItem, Right, Thumbnail, Title } from 'native-base';
import { Text } from 'react-native';

import { fetchPlayersFromAPI } from '../redux/actions';
import AvatarTeam from '../components/AvatarTeam';

class AppTeams extends Component {

  static navigationOptions = {
    title: 'Teams',
  };

  NavAppPlayer = (data) => {
    NavigationService.navigate('Player', {'player':data} );
  };

  FindPlayerById = (arr, id)  => {
    return arr.find((el)=> el.id === id);
  };

  RenderPlayers = (team, players, findPlayerById, navAppPlayer) => {
    return team.players.map(function (id, index) {
      let player = findPlayerById(players, id);
      if (player == undefined) {
        return <Text key={index}>[nf]</Text>
      }
      return (
        <ListItem button style={{paddingLeft:8,paddingRight:8,minWidth:48,marginRight:4}} key={index} onPress={() => { navAppPlayer(player) }}>
        <Badge primary style={{marginRight:6}}><Text style={{ fontSize: 10, color: "#fff", lineHeight: 18 }}>{player.skill}</Text></Badge>
        <Text>{player.name}</Text>
        </ListItem>
      );
    });
  };

  RenderTeams = (teams, players, findPlayerById, navAppPlayer, renderPlayers) => {
    return teams.map(function (team, index) {
      let playersBlock = renderPlayers(team, players, findPlayerById, navAppPlayer);
      return (
        <Card key={index}>
          <CardItem button>
            <Left>
              <AvatarTeam/>
              <Body>
                <H3>{team.name}</H3>
                <Text>( {team.id} ) {team.bar}</Text>
                <Text>Thursday Night League</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Content>
              <List>
                {playersBlock}
              </List>
            </Content>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-trophy" />
                <Text> {team.wins} Wins</Text>
                <Icon active name="ios-ribbon" style={{marginLeft:8}}/>
                <Text> {team.points} Points</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text></Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });

  };

  render() {
    const navAppPlayer = this.NavAppPlayer;
    const renderPlayers = this.RenderPlayers;
    const findPlayerById = (arr, id)  =>  arr.find((el)=> el.id === id);
    const { players, isFetching } = this.props.players;
    const { teams } = this.props.teams;

    let renderedTeams = this.RenderTeams(teams, players, findPlayerById, navAppPlayer, renderPlayers);

    return (
      <Container>
        <Content style={{marginTop:0}}>
          { renderedTeams }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
  teams: state.teams
});

const mapDispatchToProps = (dispatch) => ({
  getPlayers: () => dispatch(fetchPlayersFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppTeams);
