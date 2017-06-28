jQuery.fn.inputHints=function(){jQuery(this).each(function(i){jQuery(this).val(jQuery(this).attr('title'));});jQuery(this).focus(function(){if(jQuery(this).val()==jQuery(this).attr('title'))
jQuery(this).val('');}).blur(function(){if(jQuery(this).val()=='')
jQuery(this).val(jQuery(this).attr('title'));});};




jQuery(document).ready(function() {
"use strict";
    jQuery('input[title], textarea[title]').inputHints();
    var elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
    var chaffle = new Chaffle(el, { speed: 40});
        el.addEventListener('mouseover', function () {
            chaffle.init();
        });
    });
});