// Write your solution in this file!
const employee = {
    name: 'Michael',
    streetAddress: '101 New York Street'
};

const newEmployee = deleteFromEmployeeByKey(employee, 'name');

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {["name"]: 'Sam', ["streetAddress"]: '11 Broadway'});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {["name"]: 'Sam', ["streetAddress"]: '12 Broadway'});
}

function deleteFromEmployeeByKey(employee, key) {
    return Object.assign(employee.name = 'Sam')
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    return Object.assign(employee, delete employee.name)
}