class BankingAccount {
    #balance;
    #id;
    constructor(id, balance) {
        this.#balance = balance;
        this.#id = id;
    }
    get id() {return this.#id;};
    set id(id) {this.#id = id;};
    get balance() {return this.#balance;};
    set balance(balance) {this.#balance = balance;};
    withdraw = (amount) => this.#balance -= amount;
    deposit = (amount) => this.#balance += amount;
}

let bankAccount = new BankingAccount(1, 100);
bankAccount.balance = 400

bankAccount.deposit(10);
console.log(`bankAccount.getBalance() ${bankAccount.balance}`);
bankAccount.withdraw(60);
console.log(`bankAccount.getBalance() ${bankAccount.balance}`);