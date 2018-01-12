import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Content, H3 } from 'native-base';

export default class AppBooks extends Component {

  render() {
    let books = this.props.cards.map(function (book, index) {
      return (
        <Card key={index}>
          <CardItem header>
            <Body>
              <H3>{book.book}</H3>
              <Text>By {book.author}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{book.text}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    });
    return (
        <Content style={{marginTop:75}}>
        {books}
        </Content>
    )
  }
}

module.export = AppBooks;
