import { Account } from "./Accounts/Account.js";

export class CheckingAccount extends Account{
    static numberOfAccounts = 0
    
    constructor(client, bank) {
        super(0, client, bank);
        CheckingAccount.numberOfAccounts += 1;
    }
    
    //overwrites withdraw: 
    withdraw(amount){
        let fee = 1.1;
        return this._withdraw(amount, fee);
    }
}