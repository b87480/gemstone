$(document).ready(function(){


$('#cover').click(function(){
	newIntro();

});

$('#read2').click(function(){
	StopMusic();
});




});


function newIntro(){
	var sound = document.getElementById('music');
	sound.play();

};
function StopMusic(){
	var sound = document.getElementById('music');
	sound.pause();
};

