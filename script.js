const button = document.getElementById("resizeButton");
const image = document.getElementById("myImage");
const body = document.getElementById("pageBody");

button.addEventListener("click", function () {

    // ① 画像最大化
    image.classList.toggle("fullscreen");

    // ② 背景色変更
    body.classList.toggle("darkBackground");

});
