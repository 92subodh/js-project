const randomcolor =function(){
    const hex="1234567890ABCDEF"
    let color="#"
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
const start = function(){
    intervalId = setInterval(changebgcolor,10);

    function changebgcolor(){document.body.style.backgroundColor = randomcolor()}

}

const stop = function(){
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#stop').addEventListener('click', stop)