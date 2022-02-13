class CustomArray {
  constructor() {
    this.elements = arguments;
  }
  IndexOf(callback) {

    let result = 0;
    for (let index = 0; index < this.elements.length; index++) {
      let item = this.elements[index]
      if (callback(item)) {
        result += index;
        break;
      }
    }
    return result;
  }
  LastIndexOf(callback) {

    let result = 0;
    for (let index = 0; index < this.elements.length; index++) {
      let item = this.elements[index]
      if (callback(item)) {
        result += index;
      }
    }
    return result;
  }
}

const arr = new CustomArray("BMW", "Audi", "Mercedes-Benz", "Ferrari", "Bugatti");

console.log(arr.IndexOf(elem => elem == "Bugatti"));
console.log(arr.LastIndexOf(elem => elem == "Bugatti"));



