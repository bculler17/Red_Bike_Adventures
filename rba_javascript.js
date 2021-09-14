window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

(window).on('beforeunload', function() {
    (window).scrollTop(0);
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  var m = document.getElementById("map");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    m.style.display = "none";
  }
}


