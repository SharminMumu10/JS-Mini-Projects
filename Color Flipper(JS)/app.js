const colors = ["green","red","rgba(133,122,200)",
              "#f15025"];

const color_flip = document.getElementById('btn')

const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors [randomIndex];
    color.textContent = colors [randomIndex];
  
});

