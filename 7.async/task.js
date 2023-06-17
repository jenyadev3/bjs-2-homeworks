class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
 }

  addClock(time, callback ) {
    if(!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.some(item => item.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    let alarm = {
        callback: callback,
        time: time,
        canCall: true
    }

    this.alarmCollection.push(alarm);
   }
  
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, 0);
    let minutes = currentDate.getMinutes().toString().padStart(2, 0);
    return `${hours}:${minutes}`;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        let currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach((alarm) => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}