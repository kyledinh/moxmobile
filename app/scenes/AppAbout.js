import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, H3, Header, Icon, Left, Right, Thumbnail, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Sys }  from '../System';

export default class AppAbout extends Component {

  constructor() {
      super();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
              <Title>About</Title>
          </Body>
          <Right>
            <Button transparent>
            </Button>
          </Right>
        </Header>

        <Content style={{marginTop:0}}>
          <Card >
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/team-kyle-profile.jpg')} />
                <Body>
                  <Text>Kyle Dinh, programmer</Text>
                  <Text>kyledinh@gmail.com</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card >
            <CardItem>
                <Body>
                  <Text>{ Sys.APP_NAME }</Text>
                  <Text>{ Sys.VERSION }</Text>
                  <Text>{ Sys.BUILD_DATE }</Text>
                  <Text>{ Sys.REPO_SOURCE }</Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

module.export = AppAbout;
