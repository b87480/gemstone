$(document).ready(function(){


$('#cover').click(function(){
	newIntro();

});

$('#read2').click(function(){
	StopMusic();
});

$('#ch1').on('pageinit', function(){ //start ch1 page
	$('#ch1img').css({'position': 'relative', 'right': '-100px', 'top': '-150px', 'width': '10%', 'z-index': '1000'});


$('#ch1img').click(function(){
	$('#ch1img').effect("bounce", 'slow');
	playBlip();

});

});//end ch1 page

});


function newIntro(){
	var sound = document.getElementById('music');
	sound.play();

};
function StopMusic(){
	var sound = document.getElementById('music');
	sound.pause();
};
function playBlip(){
	var sound = document.getElementById('blip');
	sound.play();
}

