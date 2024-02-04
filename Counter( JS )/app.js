// FOR DECREASING

// const btn = document.querySelector('.decrease');
// const value = document.getElementById('value');
// let currentValue = 0;
// btn.addEventListener('click', function() {

    

// currentValue =  currentValue - 1;
// document.body.style.color = "red";
// value.textContent = currentValue;



// });


// FOR INCREASING

// const increaseBtn = document.querySelector('.increase');


// increaseBtn.addEventListener('click', function() {

    

//     currentValue =  currentValue + 1;
// document.body.style.color = "blue";
// value.textContent = currentValue;



// });

// for reset
// const reset = document.querySelector('.reset');

// reset.addEventListener('click', function() {

//     let resetValue = 0;
//     value.textContent = resetValue;
// });
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item)
{
  item.addEventListener('click',function (e) {
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count = count - 1;
    }
    else if(styles.contains("increase")){
      count = count + 1;
    }
    else
    {
      count = 0;
    }
    value.textContent = count;
  });
});





// btns.forEach(function (item) {
//   item.addEventListener("click", function (e) {  // e -> event object
//     const styles = e.currentTarget.classList; // event object is a property of a currentTarget 
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });



