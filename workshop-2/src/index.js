import { registerImage } from "./lazy";

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {

    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);
    
    appendedImages++;
    printLog();

    return container;

}


const mountNode = document.getElementById("images");

const addButton = document.querySelector("#add");
const cleanButton = document.querySelector("#clean");

const addImage = () => {

    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
    
}

const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

}

addButton.addEventListener("click", addImage)
cleanButton.addEventListener("click", cleanImages)
