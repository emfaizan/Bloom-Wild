function login(){
    document.getElementById("login").classList.toggle("active");
} 
function userpop(){
    document.getElementById("userpopup").classList.toggle("active");
} 
function create(){
    document.getElementById("create-account").classList.toggle("active");
} 


$(document).on('click', '#login .back-overlay', function(){
    login();
});

$(document).on('click', '#userpopup .back-overlay', function(){
    userpop();
});


$(document).on('click', '.mobile-menu-trigger a', function(){
    $('body').toggleClass('mobile-menu-active');

    if($('.mobile-menu-overlay').length == 0){
        $('<div class="mobile-menu-overlay"></div>').insertAfter('.header-menu');
    }
    
    $('.mobile-menu-active .has-megamenu').removeClass('active');
});

$(document).on('click', '.mobile-menu-overlay', function(){
    $('body').removeClass('mobile-menu-active');
    $('.mobile-menu-active .has-megamenu').removeClass('active');
    $('.mega-menu-active').removeClass('mega-menu-active')
});

$(document).on('click', '.mobile-menu-active .has-megamenu', function(){
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('mega-menu-active');
});

$(document).on('click', '.footer-box h4', function(){
    $(this).parent('.footer-box').toggleClass('active')
});

$(document).on('click', '.border-filter', function(){
    $('.product-collections').toggleClass('filter-visible');
});