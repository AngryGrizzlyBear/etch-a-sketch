let clear = document.querySelector("button");
let container = document.querySelector(".container"); 

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("What size would you like the grid to be? (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}
        
        
//function to create a 16x16 grid
function createGrid(size){

//    resetSize(); // get rid of this as this was causing it to show the prompt again each time


    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = "black";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white"
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);