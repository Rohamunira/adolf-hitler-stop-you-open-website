images = document.createElement("img");
images.src = chrome.runtime.getURL("/images/images.png");
document.body.innerHTML = ""; // https://raw.githubusercontent.com/Rohamunira/adolf-hitler-stopping-you/refs/heads/main/images/images.png
document.body.appendChild(images);
document.style = "background-color: #000;";
