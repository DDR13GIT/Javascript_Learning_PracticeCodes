for (let i = 0; i < 100; i++){
    console.log(i);
}


let arr = [33,34,35,36];

arr.forEach(function(element) {
    console.log(element);
});
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});

//working with object using for loop
let obj = {
    name: "deb",
    age: "25",
    city: "Dhaka",
    Os: "Windows"
}

for(let key in obj){
    console.log(key);
}
for (let key in obj) {
    console.log(obj[key]);
    console.log(`the ${key} of the object is ${obj[key]}`);
}