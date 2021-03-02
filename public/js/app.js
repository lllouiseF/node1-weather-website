

const weatherform = document.querySelector('form')
 const search = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')
 const messageTwo = document.querySelector('#message-2')
 const message3 = document.querySelector('#humidity')


 // messageOne.textContent = 'error'


 weatherform.addEventListener('submit', (event) => {
     event.preventDefault()

     const location = search.value
   

     messageOne.textContent = 'loading...'
     messageTwo.textContent = ''
     message3.textContent = '' 

    

    
     fetch('/weather?address=' + location).then((response) => {
     response.json().then((data) => {  
         if(data.error) {
            messageOne.textContent = data.error
console.log(data.error)
         }else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            message3.textContent = 'Humidity: ' + data.humidity
        
            
         }
    
    })
 })

 })
