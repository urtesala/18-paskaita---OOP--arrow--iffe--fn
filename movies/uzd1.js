class Movie {
  constructor(argName, argYear, argDirector, argBudget, argIncome) {
    this.name = argName;
    this.year = argYear;
    this.director = argDirector;
    this.budget = argBudget;
    this.income = argIncome;
  }

  getIntroduction() {
    return `Movie ${this.name}, ${this.year}, director ${this.director} `;
  }

  getProfit() {
    //is pajamu atimtas biudzetas
    const profit = this.income - this.budget;
    return profit;
  }

  getProfitTimes() {
    const profitTimes = this.income / this.budget;
    return profitTimes;
  }

  // printMovie() {
  //   const h3El = document.getElementById("movieName");
  //   h3El.textContent = this.getIntroduction();
  // }
}
const avatar = new Movie("Avatar", 2009, "James Cameron", 237e6, 2.802e9);
console.log("avatar ===", avatar);
console.log("getIntroduction() ===", avatar.getIntroduction());
console.log("avatar.getProfit() ===", avatar.getProfit());
console.log(
  "getProfitTimes() ===",
  avatar.getProfitTimes().toFixed(2),
  "kartu"
);
