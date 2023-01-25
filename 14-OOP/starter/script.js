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

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  //overriding methods
  calcAge() {
    console.log(
      `I am ${this.age} years old, but as a student I feel like ${
        2023 - this.birthYear + 10
      }.`
    );
  }
}

const david = new Student('David Escobar', 1998, 'CS');
const mariah = new Student('Mariah Sales', 1998, 'HR');
david.introduce();
mariah.introduce();
mariah.calcAge();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const naruto = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const boruto = Object.create(StudentProto);
boruto.init('Boruto', 2010, 'CS');
boruto.introduce();
boruto.calcAge();


class Account {
  //Public fields
  locale = navigator.language;
  //Private field uses '#' applies to methods as well
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // creating properties not in the constructor
    // adding a '_' protects the data but the property is not truly private
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public interface

  //getting 'private' data
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    //allows chaining
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}

const acc1 = new Account('David', 'USD', 1998);
console.log(acc1);

// bad practice
// acc1.movements.push(135);
// acc1.movements.push(-50);

//better
acc1.deposit(400);
acc1.withdraw(200);
console.log(acc1); // movements: [400, -200]
console.log(acc1.getMovements());

// chaining methods
acc1.deposit(400).deposit(200).withdraw(50).deposit(1000);
console.log(acc1.getMovements()); //logs [400, -200, 400, 200, -50, 1000]
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
  chargeBatt(battery) {
    this.#charge = battery;
    console.log(`Battery charged to ${this.#charge}`);
    return this;
  }
}
const evcl1 = new EVCL('Tesla', 60, 80);
evcl1.accelerate();
evcl1.chargeBatt(95);
evcl1.accelerate().accelerate().chargeBatt(96).accelerate();
console.log(evcl1.speedUS);
