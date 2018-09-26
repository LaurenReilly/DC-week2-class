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

//EXERCISES PART 2

//1
var birthYears = [1989, 1989, 1990, 1991];

function commonYear(array) {
    var object = {};
    for (var i = 0; i < birthYears.length; i++) {
        var currentYear = array[i];
        if (!object[currentYear]) {
            object[currentYear] = 0;
        }
        object[currentYear]++;
    }
    return object;
}

console.log(commonYear(birthYears));

//2
var string = "This is a random string."

function charCount(words) {
    var object = {};
    for (var i = 0; i < words.length; i++) {
        var currentChar = words[i];
        if (!object[currentChar]) {
            object[currentChar] = 0;
        }
        object[currentChar]++;
    }
    return object;
}

console.log(charCount(string));

//3
var olympics = [{country: "USA", time: 12}, {country: "Japan", time: 11}, {country: "USA", time: 14}, {country: "Japan", time: 15}, {country: "Ireland", time: 22}, {country: "Ireland", time: 10}];

function bestTime(times) {
    var bestTimes = {};
    for (var i = 0; i < times.length; i++) {
        var currentTime = times[i];
        if (!bestTimes[currentTime.country]) {
            //if we haven't seen country before record its time
            //needed to reach deeper into objects for code to make sense! you can redefine these and attach to variables
            bestTimes[currentTime.country] = currentTime.time;
        } else if (currentTime.time < bestTimes[currentTime.country]) {
            bestTimes[currentTime.country] = currentTime.time;
        }
    }
    console.log(bestTimes);
    return bestTimes;
}

bestTime(olympics);

//4
var positiveNegative = [-1, 5, -6, 7, -11, 14, 56, -22];

function positiveNegativeCount(array) {
    var count = {positive: 0, negative: 0}
    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        if (number > 0) {
            count.positive++;
        } else if (number < 0) {
            count.negative++;
        }
    }
    return count;
}

console.log(positiveNegativeCount(positiveNegative));
