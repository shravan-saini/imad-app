// crate an request to server
var request = new XMLHttpRequest();

// capture the response in a variable
request.onreadystatechange = function()   {
  if(request.readyState === XMLHttpRequest.DONE)
  {
      if(request.status===200)
      {
          var articleList = request.responseText;
          articleLists = JSON.parse(articleList);
          var list='';
          if(articleList.length<5)
              for(var i=0;i<articleList.length;i++)
              {
                  list+= '<li>'+articleLists[i].title+'</li>';
              }
            else
              for(i=0;i<5;i++)
              {
                  list+= '<li>'+articleLists[i].title+'</li>';
              }
          var ul = document.getElementById('newArticleList');
          ul.innerHTML = list;
          
      }
  }
};
request.open('GET','http://shravansaini94.imad.hasura-app.io/GetNewArticles',true);
request.send(null);

console.log('hello');