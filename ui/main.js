
// code for counter endpoint

var button = document.getElementById('counter');
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
};

//code for name List

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  // crate an request to server
  var request = new XMLHttpRequest();
  
  // capture the response in a variable
  request.onreadystatechange = function()   {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              var names = request.responseText;
              names = JSON.parse(names);
              var list='';
              for(var i=0;i<names.length;i++)
              {
                  list+= '<li>'+names[i]+'</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
              
          }
      }
  };
  
  //capture the name from input area
  var inputarea = document.getElementById('inputarea');
  var name = inputarea.value;
  
  //Make a request to server
  request.open('GET','http://shravansaini94.imad.hasura-app.io/submit-name?inputarea='+name,true);
  request.send(null);
};
console.log('Loaded!');  
 
 