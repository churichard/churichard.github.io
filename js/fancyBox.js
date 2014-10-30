$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'inside'
			},

			thumbs : {
				width  : 96,
				height : 64
			}
		}
	});
});