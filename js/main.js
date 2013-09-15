$(document).ready(init);

function init() {
	var videos = $('.videoWrapper');

	videos.each(function(){
		$.ajax({
        	url: 'http://vimeo.com/api/v2/video/' + $(this).data('vimeoid') + '.json',
        	dataType: 'jsonp',
        	type: 'GET',
        	success: function(response, success, videoWrapper){
        		var video = response[0];
        		var videoWrapper = $('.videoWrapper[data-vimeoid='+video.id+']');
        		videoWrapper.css('background-image', 'url('+video.thumbnail_large+')');
        		videoWrapper.append('<div class="play-button"></div>');

                videoWrapper.hover(function() {
                    $('.play-button', this).addClass('hover');
                }, function() {
                    $('.play-button', this).removeClass('hover');
                });

        		videoWrapper.on('click', function(){
        			var id = $(this).data('vimeoid');
            		$(this).html('<iframe id="player'+id+'" src="//player.vimeo.com/video/'+id+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;api=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>');
            		
            		// var iframe = $('#player'+id)[0];
            		// var player = $f(iframe);
            		// console.log(player);

            		// player.api('play');
            		// player.addEvent('ready', function(){
            		// 	console.log('ready');
            		// 	player.play();
            		// });
            	});
        	}
    	});
	});
}