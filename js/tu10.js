const myobj = {
    name: "John",
    game: function() {
        return "GTA";
    }
}

console.log(myobj.game());

let arr = ['fruit', 'vegetable', 'meat'];

arr.forEach(function (element, array, index) {
    
    console.log(element, index)

});

var i = 234
console.log(i);

function ui(name) {
    return `this is a ${name} ui`
}
console.log(ui('sanglap'));