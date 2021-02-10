window.onload = () => {

    let input = document.querySelector("#input")
    let tarminalInpute = document.querySelector(".tarminal-inpute")
    let help = document.querySelector("#help")
    let home = document.querySelector("#home")
    let about = document.querySelector("#about")
    let skills = document.querySelector("#skills")
    let portfolio = document.querySelector("#portfolio")
    let contact = document.querySelector("#contact")
    let perentDiv = document.querySelector("#tarminal-box")

    let tarminal = document.getElementById("tarminal")

    console.dir(perentDiv)

    let previesChieldInpute = [];
    let preChield = '';
    let count = 0;

    input.addEventListener("change", function (e) {
        if (e.target.value) {
            //help comand section
            if (e.target.value.toLowerCase() === "help") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }

                    count++;
                    let newDiv = createOutput("help", help)
                    help.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)
                    previesChieldInpute.push(newDiv.id)
                    preChield = "help"
                    e.target.value = ''
                }

            }
            //home comand section
            else if (e.target.value.toLowerCase() === "home") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }
                    count++;
                    let newDiv = createOutput("home", home)
                    home.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)

                    previesChieldInpute.push(newDiv.id)
                    preChield = "home"
                    e.target.value = ''
                }
            }
            //about comand section
            else if (e.target.value.toLowerCase() === "about") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }
                    count++;
                    let newDiv = createOutput("about", about)
                    about.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)

                    previesChieldInpute.push(newDiv.id)
                    preChield = "about"
                    e.target.value = ''
                }
            }
            //skills comand section
            else if (e.target.value.toLowerCase() === "skills") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }
                    count++;
                    let newDiv = createOutput("skills", skills)
                    skills.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)

                    previesChieldInpute.push(newDiv.id)
                    preChield = "skills"
                    e.target.value = ''
                }
            }
            //portfolio comand section
            else if (e.target.value.toLowerCase() === "portfolio") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }
                    count++;
                    let newDiv = createOutput("portfolio", portfolio)
                    portfolio.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)

                    previesChieldInpute.push(newDiv.id)
                    preChield = "portfolio"
                    e.target.value = ''
                }
            }
            //contact comand section
            else if (e.target.value.toLowerCase() === "contact") {

                if (e.target.value.toLowerCase() != preChield) {
                    if (previesChieldInpute.length === 2) {
                        let value = previesChieldInpute.shift()
                        var myCoolDiv = document.getElementById(`${value}`);
                        perentDiv.removeChild(myCoolDiv)
                    }
                    count++;
                    let newDiv = createOutput("contact", contact)
                    contact.style.display = "block"
                    perentDiv.insertBefore(newDiv, tarminalInpute)

                    previesChieldInpute.push(newDiv.id)
                    preChield = "contact"
                    e.target.value = ''
                }
            }
            //contact comand section
            else if (e.target.value.toLowerCase() === "clear") {
                location.reload(); 
            }

            else {
                count++;
                let newDiv = errorCreate(`${e.target.value}`)
                perentDiv.insertBefore(newDiv, tarminalInpute)
                previesChieldInpute.push(newDiv.id)
                e.target.value = ''
            }
        }
    })

    //create a main div 
    function createOutput(value, element) {
        let innerHTML = `<p class="text" >@rifat: <span>root ~ <span style="color: #FF0375;" >${value}</span></span></p>`
        let maindiv = document.createElement('div')
        let div = document.createElement('div')
        div.className = `tarminal-inpute inpute${count}`
        maindiv.setAttribute('id', `main${count}`)
        div.innerHTML = innerHTML
        maindiv.appendChild(div)
        maindiv.appendChild(element)

        return maindiv
    }

    //create not found command div
    function errorCreate(value) {
        let innerHTML = `<p class="text" >@rifat: <span>root ~ <span style="color: #FF0375;" >${value}</span></span></p>`

        let innerHTML2 = `<h4>${value} <span style="color:gray;" >command not found Type help for command list</span>  </h4>`

        let maindiv = document.createElement('div')
        let div = document.createElement('div')
        let div2 = document.createElement('div')
        div.className = `tarminal-inpute`
        maindiv.setAttribute('id', `main${count}`)
        div.innerHTML = innerHTML
        div2.innerHTML = innerHTML2

        maindiv.appendChild(div)
        maindiv.appendChild(div2)


        return maindiv
    }
}
