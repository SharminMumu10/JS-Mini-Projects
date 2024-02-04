
const modalbtn = document.querySelector(".modal-btn");

const closebtn = document.querySelector(".close-btn");

const overlay = document.querySelector(".modal-overlay");

modalbtn.addEventListener('click',function()
{
    overlay.classList.add('open-modal');
})

closebtn.addEventListener('click',function()


{
    overlay.classList.remove('open-modal');

})











