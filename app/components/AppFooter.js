import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Header, Icon } from 'native-base';
import NavigationService from '../../NavigationService';

export default class AppFooter extends Component {

  constructor() {
    super();
    this.state={activeTabName: 'Home'}
  }

  checkActive(tab) {
    return tab === this.state.activeTabName;
  }

  tabAction(tab) {
    this.setState({'activeTabName':tab});
    NavigationService.navigate(tab);
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active={this.checkActive('News')} onPress={()=> {this.tabAction('News')}}>
            <Icon name="ios-paper" />
            <Text>News</Text>
          </Button>
          <Button active={this.checkActive('Matches')} onPress={()=> {this.tabAction('Matches')}}>
            <Icon name="md-medal" />
            <Text>Matches</Text>
          </Button>
          <Button active={this.checkActive('Teams')} onPress={()=> {this.tabAction('Teams')}}>
            <Icon name="ios-flag"/>
            <Text>Teams</Text>
          </Button>
          <Button active={this.checkActive('Players')} onPress={()=> {this.tabAction('Players')}}>
            <Icon name="ios-contacts"/>
            <Text>Players</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
module.export = AppFooter;
