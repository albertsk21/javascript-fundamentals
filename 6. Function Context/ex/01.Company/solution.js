class Company {
    constructor() {
        this.departments = [];
    }


    addEmployee(username,salary,position,department){

        if( !username || !salary || salary < 0 || !position || !department){
            throw  new Error("Invalid input!") ;
        }

        let departmentObj = {
            name : department,
            employees : [],
        }

        let employee = {
            name : username,
            salary : salary,
            position : position
        }

        if(this.departments.length === 0 ){
            departmentObj.employees.unshift(employee);
            this.departments.unshift(departmentObj);
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
        let departmentExist = false;
        for (let i = 0; i < this.departments.length ; i++) {
            if(this.departments[i].name === department){
                this.departments[i].employees.unshift(employee);
                departmentExist = true;
                break;
            }
        }
        if(!departmentExist){
            departmentObj.employees.unshift(employee);
            this.departments.unshift(departmentObj);
        }
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    };


    bestDepartment(){

        let biggestAverageSalary = 0;
        let saveDepartmentIndex = 0;
        for (let departmentIndex = 0; departmentIndex < this.departments.length ; departmentIndex++) {

            let average = 0;
            for (let employeeIndex = 0; employeeIndex < this.departments[departmentIndex].employees.length ; employeeIndex++) {
                average += this.departments[departmentIndex].employees[employeeIndex].salary;
            }

            average = average / this.departments[departmentIndex].employees.length;
            if(average > biggestAverageSalary){
                biggestAverageSalary = average;
                saveDepartmentIndex = departmentIndex;
            }

        }

        let employees = this.departments[saveDepartmentIndex].employees;
        employees.sort((a,b) => {
            if(a.salary > b.salary){
                return -1;
            }else if(a.salary < b.salary){
                return 1;
            }
            return 0;
        });

        let output = `Best Department is: ${this.departments[saveDepartmentIndex].name}\n`;
            output += `Average salary: ${biggestAverageSalary.toFixed(2)}\n`;
        for (let i = 0; i <employees.length ; i++) {

            if(i === employees.length - 1){
                output += `${employees[i].name} ${employees[i].salary} ${employees[i].position}`;
            }else{
                output += `${employees[i].name} ${employees[i].salary} ${employees[i].position}\n`;
            }

        }

        return output;
    }

}



let c = new Company();
c.addEmployee('Steven', 2000, 'engineer', 'Construction');
c.addEmployee('Peter', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Sam', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Steven', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Peter', 1000, 'graphical designer', 'Marketing');
c.addEmployee('George', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());

