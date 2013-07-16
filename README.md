CountToJS Jquery Plugin
=======================

Plugin for animated counting starting from one number and ending with another, along with some useful options.

Sample Usage
--------


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

Example
--------
Here is a working [example](http://codepen.io/aymanfarhat/full/DFrKo)
