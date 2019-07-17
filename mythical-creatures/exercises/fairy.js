class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.numberInfantsSinceProvoked = 0;
  }

  receiveBelief() {
    this.dust ++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses = this.clothes.dresses.concat(dresses);
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.numberInfantsSinceProvoked ++;
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    }
    if (this.numberInfantsSinceProvoked === 3) {
      this.disposition = 'Good natured';
      this.numberInfantsSinceProvoked = 0
    }
    return infant;
  }
}

module.exports = Fairy;