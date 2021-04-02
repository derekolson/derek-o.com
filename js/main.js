var videos = $('.videoWrapper');

videos.each(function(){
    var videoWrapper = $(this);

    $.ajax({
        url: '//vimeo.com/api/v2/video/' + videoWrapper.data('vimeoid') + '.json',
        type: 'GET',
        success: function(response, success){
            var video = response[0];
            videoWrapper.css('background-image', 'url('+video.thumbnail_large+')');
            videoWrapper.append('<div class="play-button"></div>');

            videoWrapper.on('click', function(){
                var id = $(this).data('vimeoid');
                $(this).html('<iframe id="player'+id+'" src="//player.vimeo.com/video/'+id+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;api=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>');
            });
        }
    });
});
