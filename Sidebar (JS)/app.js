const togglebtn =  document.querySelector('.toggle-btn');

const closebtn = document.querySelector('.close-btn');

const sidebar = document.querySelector('.sidebar')

togglebtn.addEventListener('click',function(){
   console.log(sidebar.classList); 
//    if (sidebar.classList.contains('show-sidebar'))
//    {
//     sidebar.classList.remove('show-sidebar')
//    }
//    else{
//     sidebar.classList.add('show-sidebar')
//    }
 sidebar.classList.toggle('show-sidebar');
})

closebtn.addEventListener('click',function(){

    if (sidebar.classList.contains('show-sidebar'))
       {
        sidebar.classList.remove('show-sidebar')
       }
      //sidebar.classList.remove('show-sidebar')

});
