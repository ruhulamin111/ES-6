// variable declare
var marks = [12, 34, 65, 68, 90, 96, 42, 94];
let fruit = ['mango', 'apple', 'jackfruit', 'watermilon'];
const gadget = ['asus', 'hp', 'acer', 'samsung'];

// default input 
function add(num1, num2 = 0) {
    sum = num1 + num2;
    return sum;
}
const addTest = add(45, 23);
console.log(addTest);

// template string 
const age = 10;
const name = 'Abdul Baten';
const profile = `Hi, There is a ${name} and he is ${age} years old`;
console.log(profile)

