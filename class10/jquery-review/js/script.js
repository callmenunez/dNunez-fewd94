$('.box').css('background-color', 'blue');
$('.box').text('this is some text');

$('#box1').click(function(){
	$('#box1').css({'height' : '500px', 'width' : '500px'})
})
$('#box2').click(function(){
	$('#box2').css({'height' : '500px', 'width' : '500px'})
	$('#box2').hide(1000)

})

// $('div').click(function(){
// 	$(this).css({'height' : '500px' , 'width' : '500px'})
// 	// $(this).css({'height' : '600px' , 'width' : '600px'})
// })
