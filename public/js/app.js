

const weatherform = document.querySelector('form')       //define the form into a variable
 const search = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')    //paragraph on index hbs
 const messageTwo = document.querySelector('#message-2')
 //const message3 = document.querySelector('#localtime')


 // messageOne.textContent = 'error'


 weatherform.addEventListener('submit', (event) => {  //click event buuton form
     event.preventDefault()                             //prevent ro refresh browser

     const location = search.value     //.value is to extract whatever the value on iput form
   

     messageOne.textContent = 'loading...'
     messageTwo.textContent = ''
     //message3.textContent = '' 

    

    
     fetch('/weather?address=' + location).then((response) => {
     response.json().then((data) => {  
         if(data.error) {
            messageOne.textContent = data.error
console.log(data.error)
         }else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            //message3.textContent = 'localtime:' + data.localtime
        
            
         }
    
    })
 })

 })
