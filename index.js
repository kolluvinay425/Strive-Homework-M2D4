
let names =[]
console.log(names)
const userInput = function(){
    let nameid = document.getElementById('names')
    let nameidNewClass = document.createElement('div')
    nameidNewClass.classList.add('col-4')
    let list = document.createElement('ul')
    
    
    
    let inputId = document.getElementById('userInput').value//user input
    if(inputId==""){

    }
    list.innerText = `${inputId}`
    nameidNewClass.appendChild(list)
    names.push(inputId)//pushing input data to global variable
    nameid.appendChild(nameidNewClass)   
}  
window.onload =function(){
    userInput()
    console.log(names)
}

function enterName(){

    let displayName = document.getElementById("name");
    let teamName = document.getElementById("team");

    let nameDisplay = document.getElementById("enterNameDisplay")
    let newp = document.createElement('p')
    newp.innerText= displayName.value;
    nameDisplay.appendChild(newp)


    let teamDisplay = document.getElementById("teamNameDisplay")
    let newElement = document.createElement('p')
    newp.innerText= teamName.value;
    nameDisplay.appendChild(newElement)

}