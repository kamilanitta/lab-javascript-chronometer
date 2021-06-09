class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    return this.intervalId = setInterval((callback) => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60)
  }

  getSeconds() {
    return parseInt(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return `0${value}`
    }
    return `${value}`
  }

  stop() {
    clearInterval(this.intervalId) 
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds()); 

    return `${min}:${sec}` 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
