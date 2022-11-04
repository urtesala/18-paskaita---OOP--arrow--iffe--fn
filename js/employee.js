class Employee {
  constructor(argName, argLastName, argHourlyPay) {
    this.firstName = argName;
    this.lastName = argLastName;
    this.hourlyPay = argHourlyPay;
    // darbo valandoms apskaityti reiksme
    this.hoursWorked = 0;
  }

  work(howManyHours) {
    console.log(
      `${this.firstName} ${this.lastName} worked ${howManyHours} hours`
    );
    this.hoursWorked += howManyHours;
  }

  calcPay() {
    //skirtas atvaizduoti dabartini atlyginima
    const pay = this.hoursWorked * this.hourlyPay;
    console.log(`${this.firstName} ${this.lastName} salary is ${pay}`);
    return pay;
  }
}

const em1 = new Employee("James", "Bond", 10);
const em2 = new Employee("Bruno", "Mars", 15);
console.log("em1 ===", em1);
em1.work(10);
em2.work(30);
em1.work(60);
em2.work(160);
console.log(`James Bond in total worked ${em1.hoursWorked} hours`);
console.log(`Bruno Mars in total worked ${em2.hoursWorked} hours`);

console.log("em1.calcPay() ===", em1.calcPay());
console.log("em1.calcPay() ===", em2.calcPay());
