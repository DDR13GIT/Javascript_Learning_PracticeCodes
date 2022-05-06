//string
let city = "delhi";
console.log('the name of my city is: ' + city);
console.log(`the type of operator ` + (typeof city));

let myarr = ['deb', 'roy', 'kamla'];
let myarr1 = [1, 32, 25, true, 'deb'];  //mixed array with different data types
console.log(myarr);
console.log(myarr1);

//object literals
let stMarks = {
    harry: 34,
    deb: 32,
    kamla: 45,
    dhrubo: 56
}
console.log(stMarks);
console.log(stMarks.deb); //access kora jabe 1ta key value pair ke
console.log(typeof stMarks);


function print(x) {
    console.log(x);
}

print("dipok deb roy")

let date = new Date();
console.log(date);