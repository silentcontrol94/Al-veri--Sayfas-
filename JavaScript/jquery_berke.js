$(document).ready(function () {
    $('#send').click(function () {
        var comment = $('#commentTxtArea').val();
        if(comment === ""){
            alert("Bu alan boş bırakılamaz.")
        }
        $("#textArea").append('<div id="commentArea2">' + comment + '</div>');
    });
});
$(document).ready(function(){
    $("#cancel").click(function(){
        $("#berke").hide();
    })
})
$(document).ready(function(){
    $("#addComment").click(function(){
        $("#berke").show();
    })
})
$(function(){
    $("input").on({
        focus: function(){
        $(this).css("background-color","black")
        .css("color","white");
    },
    blur: function() {
        $(this).css("background-color","white");
    },
    });
});