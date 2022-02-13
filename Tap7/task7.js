class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Map(callback) {

    let result = [];

    for (const item of this.elements) {

      result.push(callback(item));

    }
    return result;
  }
}

let arr = new CustomArray(14, 47, 1, 89, 31);

console.log(arr.Map(item => item*2))

