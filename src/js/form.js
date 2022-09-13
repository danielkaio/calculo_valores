
let enviar = document.querySelector('.form')
let res

enviar.addEventListener('submit',(event)=>{


    event.preventDefault()

    
    let n1 = document.querySelector('.n1').value
    let n2 = document.querySelector('.n2').value
    let resultado = parseInt(n1) + parseInt(n2)
    
     res = document.querySelector('.res').innerHTML = `a soma é ${resultado}` 
    
    

  

})