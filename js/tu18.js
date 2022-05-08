let btn = document.getElementById('btn');
btn.addEventListener('click', func1)
document.getElementById('heading').addEventListener('dblclick', func2)

function func1(e) { 

    console.log('Thanks', e)
    
    // e.preventDefault(); // to prevent the default action
}
function func2(e) { 

    console.log('Thanks for double clicking', e)
    
    // e.preventDefault(); // to prevent the default action
}

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log("mouse moved");
    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${Math.random() * 255})`;
})