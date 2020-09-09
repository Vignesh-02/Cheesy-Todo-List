//click doesn't work on fututre elements

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(750, function() {
        $(this).remove();
    });

});

$("input[type='text'").keypress(function() {
    if (event.which == 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");


    }
});

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
});
