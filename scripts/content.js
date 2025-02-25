function display_hitler() {
    container = document.createElement("div");
    container.style = "background-color: #000;z-index: 9999999999999;position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;display: flex;align-items: center;flex-direction: row;";
    images = document.createElement("img");
    images.src = "https://raw.githubusercontent.com/Rohamunira/adolf-hitler-stopping-you/refs/heads/main/images/images.png"; // https://raw.githubusercontent.com/Rohamunira/adolf-hitler-stopping-you/refs/heads/main/images/images.png
    images.style = "margin: 0px auto;";
    container.appendChild(images);
    document.body.innerHTML = "";
    document.body.appendChild(container);
    document.body.style = "background-color: #000;overflow: hidden!important;";
}
display_hitler();
document.addEventListener('DOMContentLoaded', function() {
    display_hitler();
});