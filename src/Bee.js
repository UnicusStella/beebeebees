const Grub = require('./Grub');

class Bee extends Grub {
  // TODO.. 여기에 작성 하세요
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;
