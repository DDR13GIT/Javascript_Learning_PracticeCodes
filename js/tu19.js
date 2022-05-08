localStorage.setItem("Name", "Deb");

let name = localStorage.getItem("Name");
console.log(name);

localStorage.clear(); // clear all data from local storage

localStorage.removeItem("Name"); // remove a specific data from local storage

// we cannot store array in localStorage

let impArr = ["Deb", "John", "Mike"];

localStorage.setItem('owners', impArr); //it saves as a string

//Workaround

localStorage.setItem('owners', JSON.stringify(impArr)); //it saves as a string
let name2 = JSON.parse(localStorage.getItem('owners'));
console.log(name2);

//Same functions for session storage also