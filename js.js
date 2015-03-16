$(function(){
	var counter = 1;

	setInterval(function(){
		if (counter > 3){
			counter=1
		}
		console.log(counter)
		switch (counter){
			case 1:
				$('.card1').css('opacity','1')
				$('.card2').css('opacity','0')
				$('.card3').css('opacity','0')
				break
			case 2:
				$('.card1').css('opacity','0')
				$('.card2').css('opacity','1')
				$('.card3').css('opacity','0')
				break
			case 3:
				$('.card1').css('opacity','0')
				$('.card2').css('opacity','0')
				$('.card3').css('opacity','1')
				break
		}				
		counter += 1
		
	},4000)

})//close $(function)


// http://i.imgur.com/ncmNhiy.jpg
// http://i.imgur.com/do1Kyoj.jpg
// http://i.imgur.com/XwNPfIY.jpg