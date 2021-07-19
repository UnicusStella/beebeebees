class Grub {
  constructor(age, color, food, name) {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
    this.name = 'kimcoding';
  }

  eat() {
    console.log(`${this} jelly`);
  }
}

module.exports = Grub;
