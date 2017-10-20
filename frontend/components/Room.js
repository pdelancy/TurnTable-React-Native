import React from 'react';

// Importing other screens
import Register from './Register';
import Login from './Login';
import Home from './Home';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ListView,
    Alert,
    Button,
    AsyncStorage,
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link

class RoomScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View>
                <Text />
            </View>
        );
    }
}
