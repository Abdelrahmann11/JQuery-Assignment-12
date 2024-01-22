$(".openBtn").click(function(){
    $("#leftMenu").animate({width:"250px"}, 50)
    $("#HomeContent").animate({marginLeft:"250px"}, 50)
})

$(".CloseBtn").click(function(){
    $("#leftMenu").animate({width:"0px"}, 50)
    $("#HomeContent").animate({marginLeft:"0px"}, 50)
})


// $('#Details .toggle').click(function(){
//     $('.inner').not($(this).next()).slideUp(500);
//     $(this).next().slideToggle(500);
// });
$(document).ready(function(){
    $('#Details .toggle').click(function(){
        $('.inner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });
});


window.onload = function() {
    countDownTime("3 may 2024 12:03:00");
}
    function countDownTime(countTo) {
        let futureDate = new Date(countTo);
        futureDate = (futureDate.getTime()/1000);

        let now = new Date();
        now = (now.getTime()/1000);

        timeDifference = (futureDate- now);
            
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".mins").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`);

        setInterval(function() {  countDownTime(countTo); }, 1000);
    }


var maxLength = 100;
$("textarea").keyup(function(){
    var length = $(this).val().length;
    var amountLeft = maxLength - length;

    if(amountLeft <= 0){
        $("#chars").text("your available character finished");
    } else{
        $("#chars").text(amountLeft);
    }
})