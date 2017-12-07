class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    // return 'Hi, I am ' + this.name + '!'
    return `Hi, I am ${this.name}.`
  }

  getDescription() {
    // return 'Hi, I am ' + this.name + '!'
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let desciption = super.getDescription()
    if (this.hasMajor()) {
      desciption += ` Their major is ${this.major}`
    }
    return desciption
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age)
    this.location = location
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if (!!this.location) {
      greeting += ` I'm visting from ${this.location}.`
    }

    return greeting
  }
}

const me = new Traveller('Pierre Enriquez', 42, 'Singapore')
console.log(me.getGreeting())

const other = new Student()
console.log(other.getGreeting())
