

function searching() {
	var searchQuery = document.getElementById('search-bar').value;
	console.log('this is search'+searchQuery);
	var searchLink = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchQuery+'&limit=1&namespace=0&format=jsonp';

	//AJAX call using pure JS
	/**var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("search-result").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();*/

  $.ajax({
      type:"GET",
      dataType:"jsonp",
      url:searchLink,
      success: function(result){
          console.log(result);
      }
  });
}

function showSearchBar() {
  document.getElementById('icon').style.display = 'none';
  document.getElementById('search-bar').style.display = 'inline';
}