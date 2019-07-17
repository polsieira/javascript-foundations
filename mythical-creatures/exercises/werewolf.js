class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.human;
    this.hungry = this.wolf;
  }

  eat(victim) {
    (this.hungry && victim.alive) ? (victim.alive = false, this.change()) : victim.alive = true;
  }
}

module.exports = Werewolf;