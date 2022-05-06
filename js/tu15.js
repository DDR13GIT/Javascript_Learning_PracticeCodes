let cont = document.querySelector('.container')
console.log(cont)
console.log(cont.childNodes) //it includes all elements including text nodes

console.log(cont.children) // it includes only elements without text,comments, etc

let nodename = cont.childNodes[1].nodeName
let nodetype = cont.childNodes[2].nodeType

console.log(nodename)
console.log(nodetype)

//nodetypes

// 1. element
// 2. attributes
// 3. text node
// 8. comment
// 9. document
// 10. document type


container = document.querySelector('div.container')
console.log(container.children[1].children[0].children) //gives the child  er child  er children
console.log(container.firstChild)   //gives the first child (which can be comments, text etc)
console.log(container.lastChild)
console.log(container.firstElementChild)  //gives the first element of the class
console.log(container.firstElementChild.nextElementSibling)  //gives the first element of the class
console.log(container.childElementCount) //gives the number of elements in the class
