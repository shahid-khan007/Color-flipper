var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

var btn = document.getElementById('btn');
var color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexcode = "#";
    for (var i = 0; i < 6; i++) {
        hexcode += hex[getrandomnumber()];
    }
    document.body.style.backgroundColor = hexcode;
    color.textContent = hexcode;
    btn.style.backgroundColor = hexcode;
})

function getrandomnumber() {
    return Math.floor(Math.random() * hex.length);
}