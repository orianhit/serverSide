class BankingAccount {
    #balance;
    #id;
    constructor(id, balance) {
        this.#balance = balance;
        this.#id = id;
    }
    getId = () => this.#id;
    setId = (id) => this.#id = id;
    getBalance = () => this.#balance;
    setBalance(balance) {this.#balance = balance};
    withdraw = (amount) => this.#balance -= amount;
    deposit = (amount) => this.#balance += amount;
}

let bankAccount = new BankingAccount(1, 100);

bankAccount.deposit(10);
console.log(`bankAccount.getBalance() ${bankAccount.getBalance()}`);
bankAccount.withdraw(60);
console.log(`bankAccount.getBalance() ${bankAccount.getBalance()}`);