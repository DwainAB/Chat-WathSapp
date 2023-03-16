let menu = document.querySelector('.dropdown .is-active')
let btnToggle = document.querySelector('.ionicon')
let input = document.querySelector('input')
let btnInput = document.querySelector('form .ionicon')
let messageBody = document.querySelector('.body')
let formElement = document.querySelector('form')
menu.classList.remove('is-active')


btnToggle.addEventListener('click', () =>{
   menu.classList.toggle('is-active')
})

function send (e){
    if(input.value !== ""){
        e.preventDefault()
        let art = document.createElement("article")
        art.classList.add('message', 'is-sender')
        let par = document.createElement('p')
        par.innerHTML = input.value
        art.appendChild(par)
        messageBody.appendChild(art)
        input.value = ""
        messageBody.scrollTop = messageBody.scrollHeight
        par.classList.add('anim')
    }else{
        e.preventDefault()
    }
}

formElement.addEventListener('submit', send)






