import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Icon, Thumbnail } from 'native-base';

export default class AvatarTeam extends Component {
  render() {
    return (
      <Icon style={{fontSize:48, marginRight:8}} name="image" />
    )
  }
}
