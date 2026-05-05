$('.vantage-holder').on('click' , function(){
	let group = $(this).data('group');
	$('.vantage-holder.active')
    .not(this)
    .removeClass("active")
    .find('.vantage-desc, .vantage-separator, .video-separator, .vantage-background, .vantage-button')
    .removeClass('active')
    .end()
    .find('.vantage-image')
    .toggleClass('active');

	$('.video-separator.active').each(function() {
        if ($(this).data('group') !== group) {
            $(this).removeClass('active');
        }
    });

	$(this).toggleClass('active')
	$(this).find('.vantage-desc').toggleClass('active')
	$(this).find('.vantage-separator').toggleClass('active')
	$(this).find('.video-separator').toggleClass('active')
	$(this).find('.vantage-background').toggleClass('active')
	$(this).find('.vantage-button').toggleClass('active')
	$(this).find('.vantage-image').toggleClass('active')

	$('.video-separator[data-group="' + group + '"]').toggleClass('active');

})

