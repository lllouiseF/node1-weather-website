console.log(' client side js file is loaded')

 const weatherform = document.querySelector('form')
 const search = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')
 const messageTwo = document.querySelector('#message-2')

 // messageOne.textContent = 'error'


 weatherform.addEventListener('submit', (event) => {
     event.preventDefault()

     const location = search.value

     messageOne.textContent = 'loading'
     messageTwo.textContent = ''
    

    
     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
     response.json().then((data) => {  
         if(data.error) {
            messageOne.textContent = data.error
console.log(data.error)
         }else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
         }
    
    })
 })

 })