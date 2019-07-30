class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies = this.bag.count;
  }

  eat() {
    this.bag.candies.shift();
    this.bag.count--;
    this.countCandies = this.bag.count;
    if (this.countCandies === 0) {
      this.hasCandy = false;
    }
  }


}

module.exports = TrickOrTreater;