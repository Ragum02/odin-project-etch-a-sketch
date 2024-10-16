console.log("Hello, world!");

const boxContainer = document.querySelector("#container");

for(let i = 0; i < 256; i++){
    let newId = 0;
    const createBox = document.createElement("div");
    createBox.className = "box";
    createBox.innerText = i + 1;
    boxContainer.appendChild(createBox);
}