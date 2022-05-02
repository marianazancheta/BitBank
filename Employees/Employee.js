export class Employee {
    constructor(name, salary, id) {
        this._name = name;
        this._salary = salary;
        this._id = id;
        this.bonus = 1;

        this._password;
    }

    canLogin(password){
        return password == this._password;
    } 
    
    createPassword(password){
        this._password = password;
    }
}