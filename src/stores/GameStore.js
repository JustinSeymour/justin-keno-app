// importing observables and decorate
import { observable, action, computed, autorun, makeObservable } from "mobx";

class GameStore {


   selection = [];

   constructor() {
      makeObservable(this, {
         selection: observable,
         addNumber: action,
         removeNumber: action,
         clearSelection: action,
         isEmpty: computed,
         IsMax: computed
      })

      autorun(() => {

      })
   }

   addNumber = (number) => {
      if (this.IsMax || this.numberExistsInSelection(number)) return;
      this.selection = [...this.selection, number];
   }

   removeNumber = (number) => {
      this.selection = this.selection.filter((s) => {
         s !== number;
      })
   }

   clearSelection = () => {
      this.selection = [];
   }

   get isEmpty () {
     return this.selection.length === 0;
   };

   get IsMax() {
      return this.selection.length === 5
   };

   numberExistsInSelection(number) {
      return this.selection.includes(number)
   }


};

const store = new GameStore();
export default store;
