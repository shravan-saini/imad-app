
// code for counter endpoint
console.log('Loaded!');
var counter = 0;
var button = document.getElementById('counter');
button.click = function()
{
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
}



/*
var button = document.getElementById('counter');
console.log('hi');
button.onclick = function() {
    // Create an request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange = function() {   
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //Make an request
    request.open('GET','http://shravansaini94.imad.hasura-app.io/counter',true);
    request.send(null);
}
  
 */  
 
 