import React, { Component } from 'react';
import { Body, Button, Header, Left, Icon, Right, Title } from 'native-base';
import { Sys }  from '../System';

export default class AppHeader extends Component {
  render() {
    return (

      <Header>
        <Left>
          <Button transparent>
            <Icon />
          </Button>
        </Left>
        <Body>
          <Title>
              { Sys.APP_NAME }
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon />
          </Button>
        </Right>
      </Header>

    );
  }
}
module.export = AppHeader;
