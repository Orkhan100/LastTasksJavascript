class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Filter(callback) {
    let result = []

    for (const item of this.elements) {
      if (callback(item) == true) {
        result.push(item);
      }
    }
    return result;
  }
}

let arr = new CustomArray(78, 49, 39, 7);

console.log(arr.Filter(elem => elem > 40));

