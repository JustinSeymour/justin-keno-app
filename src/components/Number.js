import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

const Number = ({ value, key, selected, store }) => {

   const numColumns = 5;

   const { addNumber, selection, removeNumber } = store;

   const handlPress = () => {

      console.log(`Selection check: ${selection.includes(value)}`)

      if (selection.includes(value)) {
         removeNumber(value)
      } else {
         addNumber(value);
      }

   }

   return (
      <Pressable 
         title={`${value}`} style={[styles.button, {
            flex: 1 / numColumns
         }]}
         onPress={handlPress}
      >
         <Text style={styles.text}>{value}</Text>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderRadius: 25,
      backgroundColor: 'rgb(200, 200, 200)',
      margin: 5
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
    },
});

export default inject("store")(observer(Number));
