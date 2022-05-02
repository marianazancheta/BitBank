import {Employee} from "./Employee.js";

export class Director extends Employee {
    constructor(name, salary, id){
        super(name, salary, id);
        this.bonus = 2;

        
    }
}