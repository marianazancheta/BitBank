import {Client} from "./Client.js";
import {Manager} from "./Employees/Manager.js";
import {Director} from "./Employees/Director.js";
import {SystemLogin} from "./Employees/SystemLogin.js";

const manager1 = new Manager("Paul", 5000, 1234567890);
manager1.createPassword("123456");

const director1 = new Director("Laura", 10000, 1234567891);

const isLogged = SystemLogin.login(manager1, "123456");

console.log(isLogged);



/*import {CheckingAccount} from "./Accounts/CheckingAccount.js";
import {SavingsAccount } from "./Accounts/SavingsAccount.js";

//Client 1
const client1 = new Client("Ann", 123456789);
const checkingAccount1 = new CheckingAccount(client1, 1001);
const savingsAccount1 = new SavingsAccount(100, client1, 1001);

//Client 2

const client2 = new Client("John", 987654321);
const account2 = new CheckingAccount(client2, 102);

///

checkingAccount1.deposit(300);
checkingAccount1.withdraw(50);
checkingAccount1.transfer(100, account2);

///

console.log(checkingAccount1);
console.log(account2);
console.log(savingsAccount1);
console.log(CheckingAccount.numberOfAccounts);

*/