class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = (obj.bearded === undefined) ? true : obj.bearded;
    this.numberCast = 0;
    this.rested = true;
  }

  incantation(message) {
    return message.toUpperCase();
  }

  cast() {
    this.numberCast ++;
    this.rested = this.numberCast < 3;
    return (this.rested) ? 'MAGIC BULLET' : 'I SHALL NOT CAST';
  }
}

module.exports = Wizard;