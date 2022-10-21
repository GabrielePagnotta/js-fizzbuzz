const span = document.getElementById('num');



for(let i = 1; i <= 100; i++){

    
    
    if(i % 3 === 0){
        span.innerHTML += "Fizz"
    }
    
    else if(i % 5 === 0){
        span.innerHTML += "Buzz"
        
    }

    else if(i % 3 === 0 && i % 5 === 0){
        span.innerHTML += "FizzBuzz"
        
    }

    else{
        span.innerHTML += i;
    }
    
}

