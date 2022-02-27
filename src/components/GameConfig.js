import React from 'react';
import { Text, StyleSheet, View, Pressable, FlatList } from 'react-native';

import Number from '../components/Number';

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

const GameConfig = ({ store }) => {

   const { selection, isEmpty, isMax } = store;

   const renderItem = ({ item }) => {
      return <Number value={item} key={item} selected={true}/>
   }

  return (
   <View style={styles.view}>
      <Text style={styles.text}>Let's Play</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Pressable style={styles.stakesButton}>
               <Text style={styles.text}>$50</Text>
            </Pressable>
            <Pressable style={styles.stakesButton}>
               <Text style={styles.text}>$100</Text>
            </Pressable>
            <Pressable style={styles.stakesButton}>
               <Text style={styles.text}>$150</Text>
            </Pressable>
      </View>

      <View style={{ marginTop: 50 }}>
         { isEmpty ?
            <Text style={styles.nullMessage}>Select some numbers below</Text>
         : 
            <FlatList
               data={selection}
               renderItem={renderItem}
               numColumns={5}
            />
         }
         
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  stakesButton: {
     backgroundColor: 'orange',
     width: 100,
     height: 40,
     borderRadius: 5,
     margin: 5,
     alignItems: 'center',
     justifyContent: 'center'
  },
  view: {
     backgroundColor: 'rgb(252, 252, 252)',
     height: 200
  },
  selectionOutput: {
     textAlign: 'center',
     fontSize: 30,
     fontWeight: 'bold',
  },
  nullMessage: {
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center'
  }
});

export default inject("store")(observer(GameConfig));
