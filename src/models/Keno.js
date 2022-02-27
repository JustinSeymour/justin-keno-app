class Keno {


   constructor(lower, upper) {
      this.lower = lower;
      this.upper = upper;
   }

   generateGameRange() {
      let gameRange = [];
      for (let i = this.range.lower; i < this.range.upper; i++) {
         gameRange.push({
            number: i
         })
      }
      return gameRange;
   }

}

export default Keno;