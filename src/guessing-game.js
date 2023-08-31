class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
        this.guessNumber = 0;
    }

    guess() {
        return this.guessNumber = Math.ceil((this.minNumber + this.maxNumber) / 2);
    }

    lower() {
        this.maxNumber = this.guessNumber;
    }

    greater() {
        this.minNumber = this.guessNumber;
    }
}

module.exports = GuessingGame;
