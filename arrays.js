// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
function largestNumber(arr) {
    var largestNum = ''
    for (i=0; i<=largestNum;i++){
        if (numbers[i]>largestNum) {
            var largestNum=numbers[i];
        }
    }
    console.log(largestNum)
}

largestNumber()



// ---------------------------
// 2. Find longest string
// ---------------------------
function largestString() {
    let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest

    
}
console.log(largestString(strings))
// ---------------------------
// 3. Find even numbers
// ---------------------------
var even = function (num) {
    return num % 2 === 0;
    };
var evenArray = numbers.filter(even);
console.log(evenArray)

// ---------------------------
// 4. Find odd numbers
// ---------------------------
var odd = function (num) {
    return num % 2 === 1;

};

var oddArray = numbers.filter(odd);
console.log(oddArray)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
let iswords = []
 for (let i = 0; i < strings.length; i++) {
     if (strings[i].indexOf('is') !== -1) {
         iswords.push(strings[i])
     }
 }
console.log(iswords)
// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function join(a, b) {
    console.log(a + b)
}

join(strings, numbers)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
// var javascriptTeachers =  instructors.filter(function(instructor) {
//      return instructor.teaches == "JavaScript"});
//     console.log(javascriptTeachers)

let js = []
for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].teaches === 'JavaScript') {
        js.push(instructors[i])
    }
}

js.sort(function(a,b){
    if (a.firstname > b.firstname) {
        return 1
    } else {
        return -1
    }
})

console.log(js)