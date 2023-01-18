'use strict';
// constructors
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create methods in constructor functions use prototypes
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

// static methods
// Person.hey = function () {
//   console.log('Hey there 👋');
// };
// Person.hey();

// calling the constructor
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. {} is returned from the constructor function
const david = new Person('David', 1998);
console.log(david);
// console.log(david instanceof Person);
const mariah = new Person('Mariah', 1998);
const andrew = new Person('Andrew', 2000);
// console.log(andrew, mariah);

// prototypes essentially methods
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
Person.prototype.species = 'Human';
console.log(david.species); // logs 'Human'

david.calcAge(); // logs 25
mariah.calcAge(); // logs 25
andrew.calcAge(); // logs 23

const arr = [4, 3, 5, 6, 2, 1, 6, 4, 6, 3, 2]; // same as new Array
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

// not a good idea to add properties to defined Object by JS
// Array.prototype.unique = function () {
//   return [new Set(this)];
// };
// console.log(arr.unique());

// Challenge 1 ✅
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going ${this.speed} km/h`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();

// ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    // changes the property name in the constructor
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method in ES6
  static hey() {
    console.log('Hey there 👋');
  }
}
const david = new PersonCl('David Escobar', 1998);
console.log(david);
david.calcAge();
console.log(david.age);

const account = {
  owner: 'David',
  movements: [200, 50, 30, 100],
  get lastest() {
    return this.movements.slice(-1).pop();
  },
  set lastest(movement) {
    return this.movements.push(movement);
  },
};
console.log(account.lastest); // logs 100
account.lastest = 1000;
console.log(account.movements); // logs 1000
PersonCl.hey();

// least used way of creating prototype inheritance
const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },
};
const sasuke = Object.create(PersonProto);
console.log(sasuke);
sasuke.name = 'Sasuke';
sasuke.birthYear = 2000;
sasuke.calcAge();

// Challenge 2 ✅
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h.`);
    }
    
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h.`);
    }
    
    get speedUS() {
        return this.speed / 1.6;
    }
    
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const BMW = new Car('BMW', 120);
console.log(BMW.speedUS);
BMW.speedUS = 50;
console.log(BMW);
BMW.accelerate();
BMW.brake();

// Inheritance
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype); // creates an empty object in Student, linking Prototypes
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    console.log(
        `Hello, my name is ${this.firstName} and I study ${this.course}.`
        );
    };
    
    const david = new Student('David', 1998, 'CS');
    david.introduce();
    david.calcAge();
    // Challenge 3 ✅
    const Car = function (make, speed) {
      this.make = make;
      this.speed = speed;
    };
    
    Car.prototype.accelerate = function () {
      this.speed += 10;
      console.log(`${this.make} going ${this.speed} km/h`);
    };
    
    Car.prototype.brake = function () {
      this.speed -= 5;
      console.log(`${this.make} going ${this.speed} km/h`);
    };
    
    const EV = function (make, speed, charge) {
      Car.call(this, make, speed);
      this.charge = charge;
    };
    EV.prototype = Object.create(Car.prototype);
    EV.prototype.constructor = EV;
    
    EV.prototype.chargeBatt = function (chargeTo) {
      this.charge = chargeTo;
    };
    EV.prototype.accelerate = function () {
      this.speed += 10;
      this.charge--;
      console.log(
        `${this.make} going ${this.speed} km/h, with a charge of ${this.charge}`
        );
      };
      
      const tesla = new EV('Tesla', 120, 24);
      tesla.accelerate();
      tesla.accelerate();
      tesla.accelerate();
      tesla.chargeBatt(95);
      tesla.accelerate();
*/
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    // changes the property name in the constructor
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method in ES6
  static hey() {
    console.log('Hey there 👋');
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const david = new Student('David Escobar', 1998);
const mariah = new Student('Mariah Sales', 1998, 'HR');
