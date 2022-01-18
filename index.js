
let teamNumberId = document.getElementById('teamNumber')
let inputId = document.getElementById('userInput')
const userInput = function(){
    let nameid = document.getElementById('names')
   
    let list = document.createElement('li')
    
    
    
    let names = inputId.value//user input
   
    list.innerText = `${names}`
   
    nameid.appendChild(list)   
}  








const addTeams = function (event){
    event.preventDefault()
    console.log('button clicked')
    let teamNumber = teamNumberId.value
    console.log(teamNumber)
    
    let teamidValue = document.getElementById('teamdata')
    let li = document.createElement('li')
    for(let i=0;i<teamNumber;i++){
        
        li.innerText += `
        Team ${i + 1}       
    `
        
    }
    teamidValue.appendChild(li)
    
    
    
    
}  
    
    

const create = function(){
    
    
    //let teamNumberId = document.getElementById('teamNumber')
    let number = document.getElementById('teamNumber')
    if(number = undefined){
        number.innerText += 2
        console.log(number)
    }
        
    

    }  
    
        






const Assign = function(){
    
    //let inputId = document.getElementById('userInput').value
    //let className = document.getElementsByClassName('.h5')
    let newelement = document.querySelector('#teamNumberdata')
    console.log(typeof(newelement))
    console.log(newelement)  
    let id = document.getElementById('asign')
  
    let random = Math.floor(Math.random()*newelement.length)
    
    id.innerText =newelement[random]
        
        

    }
    
window.onload=function (){
    create()
}





