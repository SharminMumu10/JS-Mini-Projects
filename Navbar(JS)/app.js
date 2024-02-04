
//add - add class
//remove -remove class
//toggle - toggles class
// contains- checks classList fro scpcfic classs

const btn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");


btn.addEventListener('click',function(){
    //console.log(links.classList);
    //console.log(links.classList.contains('links'));
     if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }

  //links.classList.toggle("show-links");
});