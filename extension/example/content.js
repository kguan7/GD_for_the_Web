// replace images when the page loads
$('img').attr('src', 'http://www.scrapquilts.com/wp-content/uploads/2013/05/rising-star-quilt-block-pattern.jpg');

$('body').hover(function() {
	$(this).addClass('quilt');
})

// // replace text in the page when it loads
// $('body').children().each(function () {
// 	// replace the '@' sign with a '$' sign
// 	$(this).html( $(this).html().replace(/@/g,'$') );
// });

// // when you click on an image hide it using CSS
// $('img.artist-header_static-image-container').click(function() {
// 	$(this).addClass('hide');
// });


// // when you click on the page 'body' apply .gradient to it from the CSS
// $('img').click(function() {
// 	$(this).addClass('gradient');
// });

// // $('#main').click(function() {
// // 	$(this).addClass('gradient');
// // });

// // $('#container').click(function() {
// // 	$(this).addClass('gradient');
// // });

// // $('#hplogo').addClass('rotate');

// // $('div.cover-art-image.cover-art-image-loaded').hover(function() {
// // 	$(this).addClass('hide pink');
// // });





