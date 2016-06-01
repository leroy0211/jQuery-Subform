(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module depending on jQuery.
        define(['jquery'], factory);
    } else {
        // No AMD. Register plugin with global jQuery object.
        factory(jQuery);
    }
}(function ($) {



    var subForm = function(elem, options){

    };


    function Plugin(option) {
        return this.each(function(){
            var data = $(this).data('jquery.subForm');
            var options = typeof option == 'object' && option;

            if(!data) $(this).data('jquery.subForm', (data = new subForm(this, options)));
            if(typeof option == 'string') data[option]();
        });
    }

    $.fn.subForm = Plugin;

    window.subForm = subForm;

}));