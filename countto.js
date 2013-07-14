/*
 * CountToJS
 * ---------
 * jQuery Plugin for animated counting starting from one number 
 * and ending with another, along with some useful options.
 *
 * Copyright 2013, Ayman Farhat
 * http://aymanfarhat.com
 *
 * Released under the MIT License 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function($) {
$.fn.countTo = function(options) 
{
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).each(function() 
    {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() 
        {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals));

            if (typeof(options.onUpdate) == 'function') 
            {
                options.onUpdate.call(_this, value);
            }

            if (loopCount >= loops) 
            {
                clearInterval(interval);
                value = options.to;

                if (typeof(options.onComplete) == 'function') 
                {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null,
};
})(jQuery);
