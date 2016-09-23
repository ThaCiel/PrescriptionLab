$(document).ready(function(){

	var butPlayPause=$('.playpause');
	var video=$('video')[0];
	var vid=$('video');

	// BUTTON PAUSE FINI
	function playPause(){

		if(video.paused){
			video.play();
		}
		else{
			video.pause();
		}
	}

	butPlayPause.on('click', playPause);
	vid.on('click',function(){
		if(video.paused == false){
			playPause();
		}
		return;
	})

	//LISTENER

	video.addEventListener('pause',function(){
		butPlayPause.removeClass('played');
	});

	video.addEventListener('play',function(){
		butPlayPause.addClass('played');
	});


});