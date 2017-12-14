import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Header, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {

  constructor() {
      super();
      this.state={activeTabName: 'home'}
  }

  checkActive(tab) {
      return tab === this.state.activeTabName;
  }

  tabAction(tab) {
      this.setState({'activeTabName':tab});

      switch(tab) {
          case 'news':
            Actions.news();
            break;
          case 'matches':
            Actions.matches();
            break;
          case 'teams':
            Actions.teams();
            break;
          case 'players':
            Actions.players();
      }
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active={this.checkActive('news')} onPress={()=> {this.tabAction('news')}}>
              <Icon name="ios-paper" />
              <Text>News</Text>
            </Button>
            <Button active={this.checkActive('matches')} onPress={()=> {this.tabAction('matches')}}>
              <Icon name="md-medal" />
              <Text>Matches</Text>
            </Button>
            <Button active={this.checkActive('teams')} onPress={()=> {this.tabAction('teams')}}>
              <Icon name="ios-flag"/>
              <Text>Teams</Text>
            </Button>
            <Button active={this.checkActive('players')} onPress={()=> {this.tabAction('players')}}>
              <Icon name="ios-contacts"/>
              <Text>Players</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
module.export = AppFooter;
