class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
    this.particularCandy = 0;
  }

  fill(candy) {
    this.candies.push(candy);
    this.count = this.candies.length;
  }

  contains(candy) {
    for (var i = 0; i < this.count; i++) {
      this.candies[i].type == candy ? this.particularCandy ++ : this.particularCandy = this.particularCandy;
    }
    if (this.particularCandy > 0) {
      this.particularCandy = 0;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Bag;