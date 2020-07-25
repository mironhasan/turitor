


// FOR NAVBAR ACTIVE MENU
$(".nav-item").on("click", function(){
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
  });


// FOR SUBJECTS CATEGORY ACTIVE MENU
$(".menu").on("click", function(){
    $(".menu").removeClass("active");
    $(this).addClass("active");
  });
  