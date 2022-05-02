import { Client} from "../Client.js";

//encapsulating the code -> protects class properties (using private atributes and getters and setters).
//Abstract class
export class Account{ 
    constructor(firstDeposit, client, bank) {
        if (this.constructor == Account) {
            throw new Error("You can't instantiate an object from the Account type, it's an abstract class");
        }
        this._client = client;
        this._bank = bank;
        this._balance = firstDeposit;
    }
    
    //configures how to acess and modify private attribute
    set client(newValue) {
        if (newValue instanceof Client){
            this._client = newValue;
        }
    }

    //returns private attribute value
    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    
    deposit(amount){
        if(amount<=0) return;
        this._balance += amount;
    }

    withdraw(){
        throw new Error("This method is abstract")
    }

    _withdraw(amount, fee){
        const withdrawValue = amount * fee;
        if(amount > this._balance) return false;
            this._balance -= withdrawValue;
            return withdrawValue;
    }

    transfer(amount, account){
        const redrewmoney = amount;
        if(this.withdraw(amount))
            account.deposit(redrewmoney);
    }
}