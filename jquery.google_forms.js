(function ($) {
    var formCounter = 0;

    $.fn.googleForm = function (onSubmit) {
        return this.each(function () {
            try {
                var theForm = $(this);
                var targetFrameName = 'hidden_google_form_iframe_' + formCounter;

                theForm.attr('target', targetFrameName);

                var iFrame = $('<iframe>', {name: targetFrameName}).css({display: 'none'});
                iFrame.insertBefore(theForm);

                iFrame.load(function() {
                    if (typeof onSubmit === 'string') {
                        window.location.replace(onSubmit);
                    } else if (typeof onSubmit === 'function') {
                        onSubmit();
                    } else if (typeof onSubmit === 'object') {
                        if (onSubmit.onsubmit) {
                            onSubmit.onsubmit();
                        }
                        if (onSubmit.redirect) {
                            window.location.replace(onSubmit.redirect);
                        }
                    }
                });
            } finally {
                formCounter++;
            }
        });
    };
})(jQuery);