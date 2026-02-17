document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("resizeButton");
    const image = document.getElementById("myImage");
    const body = document.getElementById("pageBody");

    button.addEventListener("click", function () {

        image.classList.toggle("fullscreen");
        body.classList.toggle("darkBackground");

    });

});
