let element = document.createElement('li')
element.className = 'childul'
element.id = 'childli'

element.setAttribute('title', 'mytytle')
element.innerText = "hello this is created by js"
element.innerHTML = "<h1>hello this is created by js</h1>"


console.log(element)

let ul = document.querySelector('ul.no');
ul.appendChild(element)

let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className = 'elem2'

elem2.innerText = "this is a heading 3 created by elem2"
element.replaceWith(elem2)

let mid = document.getElementById('myul')
mid.replaceChild(element, document.getElementById('fui')) // syntax => (new item, old item)
mid.removeChild(document.getElementById('mui'))


let pr = elem2.getAttribute('class')

console.log(pr)
pr = elem2.hasAttribute('class')