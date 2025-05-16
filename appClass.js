class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  membership() {
    let name;
    if (balance >= 10000) {
      name = "gold";
    } else if (balance >= 5000) {
      name = "silver";
    } else {
      name = "normal";
    }
    return name;
  }
  //GET INFORMATION FROM CLIENTS
  getInfo() {
    return ` name: ${this.name}, balance: ${
      this.balance
    }, membership: ${this.membership()}`;
  }
  // withdraw money
  withdraw(amount) {
    return (this.balance -= amount);
  }
  //adding money to account
  deposite(amount) {
    return (this.balance += amount);
  }
}

let person1 = new Client("darya", 2000);
let person2 = new Client("amin", 200);

console.log(person1);
