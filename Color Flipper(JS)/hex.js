const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color_flip = document.getElementById('btn')

const colorElement = document.querySelector('.color');

   
    btn.addEventListener('click', function() {
        let hexcolor = '#';
        for (let i = 0; i < 6; i++) {
            // Generate a random index for each iteration
            const randomIndex = Math.floor(Math.random() * hex.length);
            hexcolor = hexcolor + hex[randomIndex];
        }
    
        // Apply the hex color to the background and display it
        document.body.style.backgroundColor = hexcolor;
        colorElement.textContent = hexcolor;
      
    });
    
