class Wizard {
  constructor(name) {
    this.name = name;
    this.pets = [];
    this.petsCount = 0;
  }

  givePet(pet) {
    this.pets.push(pet);
    this.petsCount++;
  }

  petList() {
    console.log(this.pets)
    let petList = '';
    let word = null;
    for (let i = 0; i < this.pets.length; i++) {
      if (this.pets[i].type.charAt[0] === /\b[aeiouAEIOU]/g) {
        let word = 'an';
      } else {
        let word = 'a'
      }
      petList += `${this.pets.name}, ${word} ${this.pets.type}`;
      if (i = this.petList.length - 1) {
        petList += '.';
      } else {
        petList += ','
      }
    }
  }
}

module.exports = Wizard;