class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
   return (this.color !== 'white') ? false : true;
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
