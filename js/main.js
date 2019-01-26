$(document).ready(function(){
    
    /* nav button click event */
    $("header .nav-btn").click(function(){
       $(this).parent().toggleClass("active"); 
    });
});