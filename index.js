// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
    create() {
        console.log(`My name is ${this.fname} ${this.lname}`);
    }
}

const child = Object.create(parent)
child.fname = "Navin"
child.lname = "Sinha"
child.create()


// Write code to explain prototype chaining

function Student(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age
}

const student1 = new Student("Navin", "Sinha", 23)
const student2 = new Student("Bikash", "Singh", 24)

console.log(student1);
console.log(student2);


// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const numbers = [10, 20, 30, 40, 50];
const numbers1 = [100, 200, 300];

Array.prototype.total = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    console.log(sum);
};

numbers.total();
numbers1.total();


// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
function Student(name) {
    this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));