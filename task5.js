class Worker {
  #name; #surname; #rate; #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  getName() {
    return this.#name;
  }

  getSurname() {
    return this.#surname;
  }

  getRate() {
    return this.#rate;
  }

  setRate(rate) {
    this.#rate = rate;
  }

  getDays() {
    return this.#days;
  }

  setDays(days) {
    this.#days = days;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}


const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); 
