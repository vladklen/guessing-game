class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.maxValue = max;
    this.minValue = min;
  }

  guess() {
    console.log(
      (this.number = Math.round((this.minValue + this.maxValue) / 2))
    );
    return (this.number = Math.round((this.minValue + this.maxValue) / 2));
  }

  lower() {
    this.maxValue = this.number;
  }

  greater() {
    this.minValue = this.number;
  }
}

module.exports = GuessingGame;
