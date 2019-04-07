$(document).ready(main);

var contador = 1;


function main(){
	$('.menu_nav').click(function(){
		//$('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
		}
			else{
				contador=1;
				$('nav').animate({left:'-100%'});
			}
		
	});
};
$(document).ready(main2);

var contador = 1;

function main2(){
	$('.menu_nav2').click(function(){
		//$('nav').toggle();

		if(contador == 1){
			$('.nav2').animate({
				left:'0'
			});
			contador=0;
		}
			else{
				contador=1;
				$('.nav2').animate({left:'-100%'});
			}
		
	});
};