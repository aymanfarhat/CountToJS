CountToJS Jquery Plugin
=============================

Plugin for animated counting starting from one number and ending with another, along with some useful options.

---javascript
$(document).ready(function(){
	$('.someElement').countTo({
		from: 0,
		to: 35,
		speed: 5000,
		refreshInterval: 50,
		onComplete: function(value) {
			/* Do something when done */
		}
	});
});
---