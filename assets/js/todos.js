
// when clicked on li 
$("ul").on("click", "li", function() {
    // this will give lineThrough effect
    $(this).toggleClass("clickedli");
    console.log("clickedLi!");
});


// When Clicked on x remove that list item after some fadeout 
$("ul").on("click", ".clicked", function(event) {
    $(this).parent().fadeOut(function() {
        /*after fadeout this function will be invoked*/
        $(this).remove();
    })
    console.log("removedLi!");
    // This will be invoked to stop bubble up!
    event.stopPropagation();
});


// creation of new toDo by entering in input box;
$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13 /*if user hit enter*/) {
        // grabbing new todo text
        var todoText = ($(this).val());
        
        // on enetring input must go away;
        $(this).val("");
        // appendind the li html code!
        var liText = "<li><span class='clicked'><i class='fa fa-trash'></i></span> " + todoText + "</li>"
        $("ul").append(liText);
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});