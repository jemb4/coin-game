const row = 10;
const col = 10;
const gameContainer = document.getElementById("game-container");




// ----- hacer que si estoy arriba, vaya abajo del todo

//función tablero
gameBoard()

function gameBoard()
{
    let html = `<table id="board">`
    for (let j = 0; j < col; j++)
    {
        html += "<tr>"
        for (let i = 0; i < row; i++)
        {
            html += `
                    <td id="cell-${j}${i}"> </td>`
        }
        html += "</tr>"
    } 
    html += "</table>"
    

    gameContainer.innerHTML = html
}


let actualCell = 98
let ejeY = Math.floor(actualCell / 10);
let ejeX = actualCell - ejeY * 10;
let persona = document.getElementById(`cell-${actualCell}`);
persona.classList.add("red");

//lógica movimiento:

document.addEventListener('keydown', function(e){ //reconoce el botón que se pulsa
    if(e.key === "ArrowUp" || e.key === "w"){moveUp()}
    if(e.key === "ArrowLeft" || e.key === "a"){moveLeft();}
    if(e.key === "ArrowRight" || e.key === "d"){moveRight();}
    if(e.key === "ArrowDown" || e.key === "s"){moveDown();}
})



function moveUp()
{
    if(ejeY !== 0)
    {
        persona.classList.remove("red")
        ejeY --
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)

        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
        
    } 
    else 
    {
        persona.classList.remove("red")
        ejeY += col-1
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
}

function moveDown()
{
    if(ejeY !== col-1)
    {
        persona.classList.remove("red")
        ejeY ++ 
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
    else 
    {
        persona.classList.remove("red")
        ejeY -= col-1
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
}

function moveRight()
{
    if(ejeX !== row-1)
    {
        persona.classList.remove("red")
        ejeX ++ 
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
    else 
    {
        persona.classList.remove("red")
        ejeX -= row-1
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
}

function moveLeft()
{
    if(ejeX !== 0)
    {
        persona.classList.remove("red")
        ejeX -- 
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
    else 
    {
        persona.classList.remove("red")
        ejeX += row-1
        actualCell = `${ejeY}${ejeX}`
        persona = document.getElementById(`cell-${actualCell}`)
        persona.classList.add("red")
        console.log(actualCell)
        if(persona.classList.contains("coin")) 
        {    
            persona.classList.remove("coin");
            showPoints();
        } 
    }
}

//lógica monedas

let coinX,
coinY, 
coin,
numeroMonedas = 5;

function randomCoin()
{
    for (let i = 0; i < numeroMonedas; i++)
    {
        coinX = Math.floor(Math.random()*row);
        coinY = Math.floor(Math.random()*col);
        coin = document.getElementById(`cell-${coinY}${coinX}`)
        document.getElementById(`cell-${coinY}${coinX}`).classList.add("coin")
        coin.innerHTML = `✪` 
    }
}

randomCoin()




//contador:


function showPoints()
{
    let showCounter = document.getElementById("counter"),
    coinCell = document.querySelectorAll(".coin"),
    counter = numeroMonedas - coinCell.length;

    showCounter.innerHTML = `You have <span class="points"> ${counter} </span> coins`
    console.log(coinCell.length)
}

showPoints()



