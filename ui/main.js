var button = getElementById('counter');

button.onclick = function() {
    // Make an request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var counter = request.responseText;
            var span = getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    
}















console.log('Loaded!');

