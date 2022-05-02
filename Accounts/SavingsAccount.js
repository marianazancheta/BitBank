import { Account } from "./Accounts/Account.js";

export class SavingsAccount extends Account {
    constructor(firstDeposit, client, bank) {
        super(firstDeposit, client, bank);
    }
}