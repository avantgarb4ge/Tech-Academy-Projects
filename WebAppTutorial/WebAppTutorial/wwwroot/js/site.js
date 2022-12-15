// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//functions to be called onmouseover and onmouseout to change the color of "Hello World"
function newColor() {
    document.getElementById("hello_world").style.color = 'blue';
}

function oldColor() {
    document.getElementById("hello_world").style.color = 'darkolivegreen';
}

window.addEventListener('load', () => {
    var container = document.getElementById("loading-container");
    container.classList = "end-loading";
})