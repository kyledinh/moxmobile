import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Icon, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { fetchPlayersFromAPI } from '../redux/actions';

import AppHeader from '../components/AppHeader';
import { Cfg, Sys } from '../System';
import { Actions } from 'react-native-router-flux';

class AppHome extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    let { players, isFetching } = this.props.players;
    let { teams } = this.props.teams;
    let { matches } = this.props.matches;
    let { news } = this.props.news;

    return (
      <Container>
        <AppHeader/>
        <Content style={{marginTop:0, marginLeft:5, marginRight:5}}>
          <Card>
            <CardItem header>
              <Text>{Sys.APP_NAME}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>MAX_ITEMS: {Cfg.MAX_ITEMS}</Text>
                <Text># of Players: {players.length}</Text>
                <Text># of Teams: {teams.length}</Text>
                <Text># of Matches: {matches.length}</Text>
                <Text># of News: {news.length}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Button block info style={{marginLeft:8, marginRight:8}} onPress={() => this.props.getPlayers()}>
          <Text>Reset Players Default</Text>
        </Button>
        <Button block info style={{marginLeft:8, marginRight:8, marginTop:8, marginBottom:8}} onPress={()=> {Actions.about()}}>
          <Text>About App</Text>
        </Button>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    players: state.players,
    teams: state.teams,
    matches: state.matches,
    news: state.news
  }
}

function mapDispatchToProps (dispatch) {
  return {
      getPlayers: () => dispatch(fetchPlayersFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHome);
