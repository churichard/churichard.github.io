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
	$(".fancybox-thumb-port").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'inside'
			},

			thumbs : {
				width  : 36,
				height : 64
			}
		}
	});
	$(".fancybox-thumb-land").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'inside'
			},

			thumbs : {
				width  : 128,
				height : 72
			}
		}
	});
});