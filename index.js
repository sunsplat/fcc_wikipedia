function searching() {
  var searchQuery = document.getElementById('search-bar').value;
  var searchLink = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cimageinfo&generator=search&exsentences=2&exlimit=20&exintro=1&gsrsearch='+searchQuery+'&gsrlimit=20&origin=*&gsrprop=snippet%7Csectionsnippet%7Csectiontitle';

  //AJAX call using pure JS
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      title = '';
      description = '';
      var data = JSON.parse(xhttp.responseText, function(key, value) {
          if (key == "title") {
            valueAddUnderscore = value.replace(' ', '_');
            title += "<div class='col-md-8 col-md-offset-2 list-group'><button type='button' class='list-group-item' onclick='window.open(\"https://en.wikipedia.org/wiki/"+valueAddUnderscore+"\", \"_blank\")' /><h2 class='col-md-offset-1'>"+value+"</h2>";
          }
          if (key == "extract") {
            title += "<div class='col-md-10 col-md-offset-1'><div>"+value+"</div></div></button></div>";
          }
      }); 
      document.getElementById('search-message').style.display = 'block';
      document.getElementById('search-result').innerHTML = title;
      document.getElementById('search-message').innerHTML = 'Displaying top 20 results';
    }
  };
  xhttp.open("GET", searchLink, true);
  xhttp.send();
}

function showSearchBar() {
  document.getElementById('icon').style.display = 'none';
  document.getElementById('search-bar').style.display = 'inline';
  document.getElementById('search-btn').style.display = 'inline';
}

// Trying to get the url for an image to display with the link
function getImageLink(title) {
   var imageSearchLink = 'https://en.wikipedia.org/w/api.php?action=query&format=json&titles='+title+'&prop=pageimages&pithumbsize=100&origin=*';
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
       var imgLink = '';
       var data = JSON.parse(xhttp.responseText, function(key, value) {
         imgArray = {};
         imgArray[key] = value;
         for (var i in imgArray) {
           if (i == "url") {
             imgLink = imgArray[i];
           }
         }
         return imgLink;
       });
     }
   };
  xhttp.open("GET", imageSearchLink, true);
  xhttp.send();
}