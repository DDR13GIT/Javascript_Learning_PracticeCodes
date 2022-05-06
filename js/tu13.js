//Exercise 1
//
let str = 'com'
let links = document.links

Array.from(links).forEach(function (element) {
    let href = element.href
    if (href.includes(str)) {
        console.log(href)
    }
}); 