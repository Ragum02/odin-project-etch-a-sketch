console.log("Hello, world!");

const boxContainer = document.querySelector("#container");
const clearBtn = document.querySelector("#clear");
const checkBorder = document.querySelector("#border-option");
const newGrid = document.querySelector("#newgrid");


let gridNumber = 16;


function generateGrid(gridNumber){
    const boxSize = 778/ gridNumber;


for(let i = 0; i < gridNumber * gridNumber; i++){
    const createBox = document.createElement("div");
    createBox.className = "box";
    //createBox.innerText = i + 1;
    createBox.style.width = `${boxSize}px`
    createBox.style.height = `${boxSize}px`
    boxContainer.appendChild(createBox);




    createBox.addEventListener("mouseover", (e) => {
        if(!createBox.style.backgroundColor){
        createBox.style.backgroundColor = "grey";
        }
    })


        
    function getRandomColor(){
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6;i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }


    createBox.addEventListener("click", (e) => {
        createBox.style.backgroundColor = getRandomColor();
    })



    clearBtn.addEventListener("click", (e) => {
        createBox.style.backgroundColor = "";
    })


    checkBorder.addEventListener("change", (e) => {
        if(checkBorder.checked){
            createBox.style.border = "1px solid black";
        } else {
            createBox.style.border = "0";
        }

    })
}
}


newGrid.addEventListener("click", (e)=>{
    const userInput = prompt("between 1 and 64");

    if(userInput === null){
        return;
    }
    if(userInput >= 1 && userInput <= 64){
    boxContainer.innerHTML="";
    gridNumber = userInput;
    generateGrid(gridNumber)
    } else{
        alert("Between 1 and 64 only");
    }
})

generateGrid(gridNumber);

    
    
    





