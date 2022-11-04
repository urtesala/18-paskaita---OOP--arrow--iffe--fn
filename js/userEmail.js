class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getEmail() {
    return `${this.name}@${this.surname}.com`;
  }
}

const username = new User("Urte", "Saladziute");

console.log("getEmail() ===", username.getEmail());
