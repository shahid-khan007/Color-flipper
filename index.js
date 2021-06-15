
const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];

var btn = document.getElementById('btn');
var color = document.querySelector('.color');

btn.addEventListener('click', function () {
    var randomnumber = getnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    btn.style.backgroundColor = colors[randomnumber];
})

function getnumber() {
    return Math.floor(Math.random() * colors.length);
}