// crate an request to server
var request = new XMLHttpRequest();

// capture the response in a variable
request.onreadystatechange = function()   {
  if(request.readyState === XMLHttpRequest.DONE)
  {
      if(request.status===200)
      {
          var articleList = request.responseText;
          articleList = JSON.parse(articleList);
          var list='';
          if(articleList.length<5)
              for(var i=0;i<articleList.length;i++)
              {
                  list+= '<li>'+articleList[i]+'</li>';
              }
            else
              for(var j=0;j<5;j++)
              {
                  list+= '<li>'+articleList[j].title+'</li>';
              }
          var ul = document.getElementById('newArticleList');
          ul.innerHTML = list;
          
      }
  }
};
request.open('GET','http://shravansaini94.imad.hasura-app.io/GetNewArticles',true);
request.send(null);

console.log('hello');