const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date().toLocaleTimeString()
    clock.innerText = date
},1000)