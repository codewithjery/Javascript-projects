const boxes = document.querySelectorAll('.button')
const body = document.querySelector('body')
body.style.backgroundColor = 'black'
body.style.color = 'white'

boxes.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id  
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'yellowgreen'
            body.style.color = 'black'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'rgba(110, 189, 225, 0.995)'
            body.style.color = 'white'
            
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'teal'
            
        }
    })
})