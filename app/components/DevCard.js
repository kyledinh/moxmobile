import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Body, Card, CardItem, Icon, Left } from 'native-base';

export default class DevCard extends Component {
  render() {
    return (
      <Card>
        <CardItem style={{backgroundColor:#FFFACD}}>
          <Left>
            <Icon ios='ios-alert-outline' android='md-alert' />
            <Body>
              <Text>IN DEVELOPMENT</Text>
              <Text>{this.props.children}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
