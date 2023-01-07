var button = document.getElementById("search");

button.onclick = function () {
    var text = document.getElementById("searchbar").value;
    window.open("https://en.wikipedia.org/wiki/" + text );
}



var input = document.getElementById("searchbar");


input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {


    var text = document.getElementById("searchbar").value;
    window.open("https://en.wikipedia.org/wiki/" + text );

    document.getElementById("search").click();
  }
});
