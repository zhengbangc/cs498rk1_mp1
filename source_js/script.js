var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}


// var loc_welcome = $("#welcome")




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