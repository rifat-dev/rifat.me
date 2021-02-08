
let input = document.querySelector("#input")
let tarminalInpute =  document.querySelector(".tarminal-inpute")
let output = document.querySelector("#output")
let help = document.querySelector("#help")
let home = document.querySelector("#home")
let about = document.querySelector("#about")
let skills = document.querySelector("#skills")
let portfolio = document.querySelector("#portfolio")
let perentDiv = document.querySelector("#tarminal-box")

let tarminal = document.getElementById("tarminal")

console.dir(perentDiv)

const previesChieldInpute = [] ;
let preChield = '' ;
let count = 0 ;

input.addEventListener("change",function(e){
    if(e.target.value){
        console.log(perentDiv.children.length)
        //help comand section
        if(e.target.value.toLowerCase() === "help"){

            if(e.target.value.toLowerCase()!= preChield){
                if(previesChieldInpute.length === 2){
                    let value = previesChieldInpute.shift()
                    var myCoolDiv = document.getElementById(`${value}`);
                    perentDiv.removeChild(myCoolDiv)
                }
    
                count++;
                let newDiv = createOutput("help",help)
                help.style.display = "block"
                perentDiv.insertBefore(newDiv,tarminalInpute)
                previesChieldInpute.push(newDiv.id)
                preChield="help"
                e.target.value = ''
            }

        }
        //home comand section
        else if(e.target.value.toLowerCase() === "home"){
          
            if(e.target.value.toLowerCase()!= preChield){
                if(previesChieldInpute.length === 2){
                    let value = previesChieldInpute.shift()
                    var myCoolDiv = document.getElementById(`${value}`);
                    perentDiv.removeChild(myCoolDiv)
                }
                count++;
                let newDiv = createOutput("home",home)
                home.style.display = "block"
                perentDiv.insertBefore(newDiv,tarminalInpute)
    
                previesChieldInpute.push(newDiv.id)
                preChield="home"
                e.target.value = ''
            }
        }
        //about comand section
        else if(e.target.value.toLowerCase() === "about"){
          
            if(e.target.value.toLowerCase()!= preChield){
                if(previesChieldInpute.length === 2){
                    let value = previesChieldInpute.shift()
                    var myCoolDiv = document.getElementById(`${value}`);
                    perentDiv.removeChild(myCoolDiv)
                }
                count++;
                let newDiv = createOutput("about",about)
                about.style.display = "block"
                perentDiv.insertBefore(newDiv,tarminalInpute)
    
                previesChieldInpute.push(newDiv.id)
                preChield="about"
                e.target.value = ''
            }
        }
        //skills comand section
        else if(e.target.value.toLowerCase() === "skills"){
          
            if(e.target.value.toLowerCase()!= preChield){
                if(previesChieldInpute.length === 2){
                    let value = previesChieldInpute.shift()
                    var myCoolDiv = document.getElementById(`${value}`);
                    perentDiv.removeChild(myCoolDiv)
                }
                count++;
                let newDiv = createOutput("skills",skills)
                skills.style.display = "block"
                perentDiv.insertBefore(newDiv,tarminalInpute)
    
                previesChieldInpute.push(newDiv.id)
                preChield="skills"
                e.target.value = ''
            }
        }
        //portfolio comand section
        else if(e.target.value.toLowerCase() === "portfolio"){
          
            if(e.target.value.toLowerCase()!= preChield){
                if(previesChieldInpute.length === 2){
                    let value = previesChieldInpute.shift()
                    var myCoolDiv = document.getElementById(`${value}`);
                    perentDiv.removeChild(myCoolDiv)
                }
                count++;
                let newDiv = createOutput("portfolio",portfolio)
                portfolio.style.display = "block"
                perentDiv.insertBefore(newDiv,tarminalInpute)
    
                previesChieldInpute.push(newDiv.id)
                preChield="portfolio"
                e.target.value = ''
            }
        }
    }
})

function createOutput(value,element){
    let innerHTML = `<p class="text" >@rifat: <span>root ~ <span style="color: #FF0375;" >${value}</span></span></p>`
    let maindiv = document.createElement('div')
    let div = document.createElement('div')
   div.className = `tarminal-inpute inpute${count}`
   maindiv.setAttribute('id',`main${count}`)
   div.innerHTML = innerHTML
   maindiv.appendChild(div)
   maindiv.appendChild(element)

   return maindiv
}