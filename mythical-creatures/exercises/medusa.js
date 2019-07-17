class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    victim.stoned = true;  
    (this.statues.length === 3) ? (this.statues.push(victim), this.statues[0].stoned = false, this.statues.shift()) : this.statues.push(victim);
  }
}

module.exports = Medusa;