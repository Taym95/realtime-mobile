import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import Home from '../screen/Home';
import Login from '../screen/Login';
import StartScreen from '../screen/StartScreen';

const Navigator = new StackNavigator(
    {
        StartScreen: {
            screen: StartScreen,
            navigationOptions: { header: null },
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null },
        },
        Login: {
            screen: Login,
            navigationOptions: { header: null },
        },
    },
    {
        initialRouteName: 'StartScreen',
    }
);

const WrappedStack = ({ key }) => {
    return (
        <Root>
            <Navigator key={key} onNavigationStateChange={null} />
        </Root>
    );
};

export default class App extends Component {
    render() {
        return <WrappedStack />;
    }
}

AppRegistry.registerComponent('RealtimeMobile', () => App);
