//1
var myArray = ["Minnie", "Luna", "Frances"];

function hello(array) {
    for (var i = 0; i < array.length; i++) {
        var name = array[i];
        console.log(`Hi, ${name}!`);
    }
}

hello(myArray);

//2
var names = ["Lauren", "Marie", "Reilly"];

function initials (array) {
    for (var i = 0; i < array.length; i++) {
        var name = array[i];
        console.log(name[0]);
    }
}

initials(names);

//3
var numbersArray = [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0];

function lastOne(array) {
    var index;
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        if (number === 1) {
            index = i;
        }
    }
    console.log(index);
    return index;
}

lastOne(numbersArray);

//shortcut for 3
console.log(numbersArray.lastIndexOf(1));

//4 
var largestNumbers = [1, 82, 5, 7, 22, 46,];

function largest(array) {
    var big = 0;
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        if (number > big) {
            big = number;
        }
    }
    console.log(big);
}

largest(largestNumbers);
