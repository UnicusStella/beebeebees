const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  constructor(age, food, color, job, canFly, treasureChest, honeyPot) {
    super(food, color);
    this.age = 10;
    this.job = 'make honey';
    this.canFly = true;
    this.treasureChest = [];
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
