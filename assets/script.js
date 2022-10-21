const div = document.getElementById('contenitore');



for(let i = 1; i <= 100; i++){


    
    
    if(i % 3 === 0 && i % 5 === 0){
        div.innerHTML += '<div>FizzBuzz</div>'

    }
    
    else if(i % 5 === 0){
        div.innerHTML += '<div>Buzz</div>'
        
    }

    else if(i % 3 === 0){
       
        div.innerHTML += '<div>Fizz</div>'
        
    }

    else{
        div.innerHTML +=`<div>${i}</div>` ;
    }
    
}

