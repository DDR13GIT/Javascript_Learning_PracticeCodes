let nam = 'deb roy'
let prename = 'my name is '

console.log(prename + nam);

prename = prename.concat(' tumare', ' ken', ' bolbo');
console.log(prename);
console.log(prename.length);
console.log(prename.toUpperCase());
console.log(prename.toLowerCase());
console.log(prename[0]);
console.log(prename.charAt(0));
console.log(prename.indexOf('ken'));
console.log(prename.lastIndexOf('e'));
console.log(prename.slice(0, 4));
console.log(prename.endsWith('bolbo'));
console.log(prename.includes('bolbo'));
console.log(prename.substring(0, 6)); // 0 to n-1 index porjonto
console.log(prename.split(' '));
console.log(prename.replace('bolbo', 'komu'));

let fruit1 = 'apple';
let fruit2 = 'banana';
let myhtml = `Hello ${nam}
<h1>this is a simple heading</h1>
<p>${fruit1} is good</p>
<p>${fruit2} is also good</p>`;

document.body.innerHTML = myhtml;