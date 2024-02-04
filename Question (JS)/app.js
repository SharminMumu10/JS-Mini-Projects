
const moi = document.querySelectorAll(".single");

moi.forEach(function (item) // item is referencing article
{
    const hello = item.querySelector(".ques-btn") 
    //console.log(hello);
    hello.addEventListener('click',function()
    {
        //if a article is opened and want to open another article 
        
        moi.forEach(function(open)
        {
           if (open !== item ){
            open.classList.remove("show-text")
           }

        })

      // each article is showing its text by toggling
       item.classList.toggle("show-text")
    }
    
    )
})

