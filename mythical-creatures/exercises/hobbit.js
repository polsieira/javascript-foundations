class Hobbit {
  constructor(name) {
    this.name = name;
    this.hasRing = name === 'Frodo';
    this.disposition = 'homebody';
    this.age = 0;
    this.old = false;
    this.adult = false;
    this.isShort = true;
  }

  celebrateBirthday() {
    this.age ++;
    this.adult = this.age >= 33;
    this.old = this.age >= 101;
  }    
}

module.exports = Hobbit;