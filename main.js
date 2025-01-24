let navBar=document.querySelectorAll('.nav-link');
let navbarCollapse=document.querySelector('.navbar-collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navbarCollapse.classList.remove("show");
    })
});

