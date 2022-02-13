
class CustomArray {
    constructor() {
      this.elements = arguments;
    }

    Some(num) {
      let result = false;
  
      for (const item of this.elements) {
        if (num(item) == true) {
          result = true;
          break;
        }
      }
      return result;
    }
  }
  
  
  let arr = new CustomArray(44, 96, 2, 47, 32);
  
    console.log(arr.Some(elem=>elem>15));