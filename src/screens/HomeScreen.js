import React from 'react';
import { StyleSheet, View } from 'react-native';

import GameBoard from '../components/GameBoard';
import GameConfig from '../components/GameConfig';

import { Provider } from 'mobx-react';
import store from '../stores/GameStore';

const HomeScreen = () => {

  return (

    <View>
      <Provider store={store}>
        <GameConfig/>
        <GameBoard/>
      </Provider>
    </View>

  );
};

export default HomeScreen;