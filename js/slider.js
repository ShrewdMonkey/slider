sliderInt=1;
sliderNext=2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(800);
	startSlider();
});


function startSlider(){
	count=$('#slider > img').size();



	loop= setInterval(function(){

		if(sliderNext>count)
		{
			
			sliderNext=1;
			sliderInt=1;
		}
		$('#slider >img').fadeOut(300);
		$('#slider > img#'+sliderNext).fadeIn(300
			);

		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
	},3000);

}


function stopLoop()
{
	window.clearInterval(loop);

};

function prev(){
	showSlide(sliderInt-1);

};
function next(){
	showSlide(sliderInt+1);
};

function showSlide(id){
	stopLoop();
	count=$('#slider > img').size();
	if(id>count)
	{
		
		id=1;
	}
	if(id<1)
	{
		id=count;
	}
	$('#slider >img').fadeOut(300);
	$('#slider > img#'+id).fadeIn(300);

	sliderInt=id;
	sliderNext=id+1;


	startSlider();
};



$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	});


