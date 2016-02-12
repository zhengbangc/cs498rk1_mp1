$(document).ready(function(){

    $(document).on("scroll",function(){
    	if($(document).scrollTop()>100){
    		$("#header").removeClass("large").addClass("small");
    	}
    	else{
    		$("#header").removeClass("small").addClass("large");
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


});
