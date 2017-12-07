const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Pierre Enriquez'));

const user = {
  name: 'Pierre',
  cities: ['Iligan', 'Cebu', 'Singapore'],
  printPlacesLive() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(user.printPlacesLive());
console.log(multiplier.multiply());
