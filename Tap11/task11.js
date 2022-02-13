class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Join(callback) {
    let result=""
    for (let index = 0; index < this.elements.length; index++) {
        if (index!=this.elements.length-1) {
          result+=callback(this.elements[index])
        }
        else{
          result+=this.elements[index];
        }
    }
    return result;
  }
}

let arr = new CustomArray("June", "July", "August", "September");

console.log(arr.Join(elem=>elem+" or "));



