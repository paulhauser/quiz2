// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

  $('#secondarySection ol li').each(function(index) {
    $(this).css("color", "blue");
    $(this).html("NEW LIST ITEM " + (index+1));
  });

  $('section').on('click', function() {
    if($('.accordion-title', this).css("display") === "none")
    {
      $('*', this).css("display", "none");
      $('.accordion-title', this).css("display", "block");
    }
    else {
      $('*', this).css("display", "block");
      $('.accordion-title', this).css("display", "none");
    }
  });

  $('button').on('click', function() {
    $('#mainContent').fadeOut(2000);
    $('#goodbyeMessage').fadeIn(4000);
  });

  $('#toph1').on('click', function() {
    $('#toph1').html("I need to leave! This function isn't that cool sorry!");
    $('#toph1').css("color", "green");
    $('#toph1').css("font-size", "2.0rem");

  });


	console.log("this is a message for you!!!");
  console.log("this is a message for Matt: Hello!");
})(jQuery);
