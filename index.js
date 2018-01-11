import { AppRegistry, View } from 'react-native';
// import App from './App';
import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Home'} />
        <AlbumList />
    </View>
);


AppRegistry.registerComponent('AwesomeFirst', () => App);
