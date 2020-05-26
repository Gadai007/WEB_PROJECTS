let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let btnChange = document.getElementById('btnChange')

let values = [
    '😎','🤐','🤩' ,'😴' ,'🙄' ,'🤨' ,'😭'
]

function getRandomValues(){
    return values[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        value1.innerText = getRandomValues()
        value2.innerText = getRandomValues()
        value3.innerText = getRandomValues()
    }, 1000/ newSpeed)
}

updateAnimation(2)

// btnChange.onchange = function(ev){
//     document.documentElement.style.setProperty('--speed', ev.target.value)

//     updateAnimation(ev.target.value)
// }

async function game(){
    let spin = await setTimeout(() => {
        
        if(value1.innerText == value2.innerText == value3.innerText){
            window.alert('You won !!!')
        }
        else{
            window.alert('You lose')
        }
    },4000)
    spin()
}

game()

