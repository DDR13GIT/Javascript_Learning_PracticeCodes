let myarry = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myarry);
console.log(myarry.length);
myarry.push(11); // to enter data in the last of an array
myarry.unshift(1000); //to enter data in front of an array
myarry.pop()
myarry.shift() //it will remove the first element of an array
myarry.splice(2, 1) //it will remove the element from the index 2 and remove 1 element
console.log(myarry)

let marks2 = [80, 90, 70, 60, 50, 40, 30, 20, 10, 0];
myarry = myarry.concat(marks2);
console.log(myarry);

let myobj = {
    name: "John",
    age: 30,
    isMarried: false,
    marks: [80, 90, 70, 60, 50, 40, 30, 20, 10, 0],
    'first name': 'John something',
};
console.log(myobj);
console.log(myobj.name);
console.log(myobj.isActive);
console.log(myobj['first name']);
