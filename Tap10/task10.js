class CustomArray {
    constructor() {
      this.elements = arguments;
    }

    Includes(elem) {

      let result = false;
  
      for (const item of this.elements) {
        if (item == elem) {
          result = true;
        }
      }
      return result;
    }
  }
  
  let arr = new CustomArray("Salam","Necesen","Yaxshiyam","Sagol");
  
    console.log(arr.Includes("Necesen"));



