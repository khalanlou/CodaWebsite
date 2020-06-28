/**************** hamburger-menu ****************/
function openNav() {
    document.getElementById("side-nav").style.width = "350px";
    document.getElementById("Main").style.marginLeft = "50px";
    document.getElementById("side-nav").style.backgroundColor = "rgb(255, 233, 233, 0.5)";
    document.getElementById("header").style.opacity = "80%";
  }
  
  function closeNav() {
    document.getElementById("header").style.opacity = "100%";
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("Main").style.marginLeft= "0";
  }
/**************** hamburger-menu ****************/

/**************** page-loader ****************/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("Main").style.display = "block";
  document.getElementById("main").style.opacity = "100%";
}
/**************** page-loader ****************/

