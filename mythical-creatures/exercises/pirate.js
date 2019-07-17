class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.numberHeinousActs = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.numberHeinousActs ++;
    this.cursed = this.numberHeinousActs >= 3;
  }

  robShip() {    
    this.booty = 100;
    return 'YAARRR!';
  }


}

module.exports = Pirate;