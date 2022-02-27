import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import Number from './Number';

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

const GameBoard = ({ store }) => {

   const { addNumber, clearSelection, isMax } = store;

   console.log(isMax)

   const generateGameRange = (lower, upper) => {
      let gameRange = [];
      for (let i = lower; i <= upper; i++) {
         gameRange.push({
            number: i
         })
      }
      return gameRange;
   }

   const numbers = generateGameRange(1, 80);

   const handleQuickPick = () => {
      addNumber(Math.round(Math.random() * 80));
   }

   const handleClear = () => {
      clearSelection()
   }

   const renderItem = ({ item }) => {
      return <Number value={item.number} key={item.number}/>
   }

   return (
      <View>
         <Button title="Quick Pick" onPress={handleQuickPick}/>
         <Button title="Clear Selection" onPress={handleClear}/>
         { !isMax ? 
            <FlatList
            data={numbers}
            renderItem={renderItem}
            numColumns={5}
            style={styles.view}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
         />
         : null }
         
      </View>
   );
};

const styles = StyleSheet.create({
   view: {
     padding: 28
   }
});

export default inject("store")(observer(GameBoard));