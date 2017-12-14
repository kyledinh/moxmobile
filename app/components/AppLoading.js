import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Spinner, Thumbnail } from 'native-base';

export default class AppLoading extends Component {

    render() {
        return (
            <Content style={{marginTop:75}}>
                <Text style={{textAlign: 'center'}}>App Loading</Text>
                <Spinner color='red'/>
            </Content>
        )
    }

}
module.export = AppLoading;
