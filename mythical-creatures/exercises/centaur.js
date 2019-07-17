class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed; 
    this.cranky = false;
    this.standing = true;
    this.layingDown = !this.standing;
    this.numberActions = 0;     
  }

  shoot() {
    this.numberActions ++;
    this.cranky = this.numberActions >= 3;
    return (this.cranky || this.layingDown) ? 'NO!' : 'Twang!!!';
  }

  run() {
    this.numberActions ++;
    this.cranky = this.numberActions >= 3;
    return !this.layingDown ? 'Clop clop clop clop!!!' : 'NO!';
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.numberActions = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = !this.layingDown;
  }

  standUp() {
    this.standing = true;
    this.layingDown = !this.standing;
  }

  drinkPotion() {
    if (this.standing) { 
      this.cranky ? this.cranky = false : this.cranky = true;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;