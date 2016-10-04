var fChecked = $('input:radio[class=F]').attr('checked', true);


$('#submit').click(function(){
	var temp = $('#temp').val();

	if(temp <= 32) {
	$('input').css('background-color', '#b9e7ff');
	} else {
	$('input').css('background-color', '#ff9999');
	}
});


$('.C').click(function(){
   var temp = $('.input').val()
        temp = (temp - 32) / 1.8;

   $('input').val(parseInt(temp));

    if(temp <= 32) {
    $('input').css('background-color', '#b9e7ff');
    } else {
    $('input').css('background-color', '#ff9999');
    }
});


$('.F').click(function(){
   var temp = $('.input').val()
        temp = (temp * 1.8) + 32;

   $('input').val(Math.ceil(temp));

    if(temp <= 32) {
    $('input').css('background-color', '#b9e7ff');
    } else {
    $('input').css('background-color', '#ff9999');
    }
});