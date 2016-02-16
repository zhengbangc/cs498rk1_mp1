//http://api.jquery.com/animate/
//https://api.jquery.com/scrollTop/
//https://api.jquery.com/click/
//http://stackoverflow.com/questions/13016379/smooth-scroll-with-javascript-onclick
//https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
//http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
//http://api.jquery.com/offset/
$(document).ready(function(){

    $(document).on("scroll",function(){
    	//the first part is for the resizing of the navigation bar
      if($(document).scrollTop()>150){
    		$("#header").removeClass("large").addClass("small");
    	}
    	else{
    		$("#header").removeClass("small").addClass("large");
    	}
      //the later part is for the location indicator
      //welcome 0px Collections 803 Inspiration 1480
      // console.log($(document).scrollTop());
      if($(document).scrollTop()<$('#carousel').offset().top){
        $(".nav-element").removeClass("nav-here").addClass("nav-nothere");
        $("#welcome-btn").removeClass("nav-nothere").addClass("nav-here");
      }
      if($(document).scrollTop()>=$('#carousel').offset().top && $(document).scrollTop() < $('#multi-column').offset().top){
        $(".nav-element").removeClass("nav-here").addClass("nav-nothere");
        $("#carousel-btn").removeClass("nav-nothere").addClass("nav-here");
      }
      if($(document).scrollTop()>=$('#multi-column').offset().top && $(document).scrollTop() < $('#modal').offset().top){
        $(".nav-element").removeClass("nav-here").addClass("nav-nothere");
        $("#multi-column-btn").removeClass("nav-nothere").addClass("nav-here");
      }
      if($(document).scrollTop()>= $('#modal').offset().top){
        $(".nav-element").removeClass("nav-here").addClass("nav-nothere");
        $("#modal-btn").removeClass("nav-nothere").addClass("nav-here");
      }




    });

    $(".nav-element").mouseover(function(){
    	$(this).removeClass("nav-dark").addClass("nav-light");
    });

    $(".nav-element").mouseout(function(){
    	$(this).removeClass("nav-light").addClass("nav-dark");
    });


// Below are for carousel
    var currentPicture = 1;
    $("#leftbtn").click(function(){
      // $("#carousel img").addClass("active");  
      $("#slidesholder img:nth-child("+currentPicture+")").removeClass("active").addClass("inactive");
      currentPicture = (currentPicture+1)%6;
      if(currentPicture === 0)
        currentPicture = 1;
      console.log(currentPicture);
      $("#slidesholder img:nth-child("+currentPicture+")").removeClass("inactive").addClass("active");  
    });

    $("#rightbtn").click(function(){
      $("#slidesholder img:nth-child("+currentPicture+")").removeClass("active").addClass("inactive");
      currentPicture = currentPicture-1;
      if(currentPicture === 0)
        currentPicture = 5;
      console.log(currentPicture);
      $("#slidesholder img:nth-child("+currentPicture+")").removeClass("inactive").addClass("active");  
    });

//Below are for smooth scrolling
  var $root = $('html, body');
  $("header nav a").click(function(){
      $root.animate({
         scrollTop: $( $.attr(this, 'href')).offset().top
      },700);
      return false;
  });


  //Below are for Modal
  var $modalbox = $("<div id='modalbox'></div>")
  var $img = $("<img>");

  $modalbox.append($img);
  $('#modal').append($modalbox);

  $('#modal li').click(function (e){
      e.preventDefault();
      var src = $(this).children('img').attr("src");
      // console.log(src);
      $img.attr('src', src);

      $modalbox.fadeIn(400);
      $modalbox.click(function(){
        $modalbox.fadeOut(400);
      })
  });


});
