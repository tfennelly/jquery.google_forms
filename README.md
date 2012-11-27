# jquery.google_forms
- - -

Google Forms are a bit of a pain in the ass to use because of the redirect.  This jQuery plugin makes Google 
Forms a bit easier to use.  It supports an optional callback and/or redirect for onsubmit, allowing you to control
the post-submit behavior a bit better.

To use it, you first need to get the form's embeddable source html i.e. the raw &lt;form&gt;.  I did this by: 

1.  Embedding the form &lt;iframe&gt; in a test page and then examining the form source (using the browser dev tools) and copying the raw &lt;form&gt;.
2.  Embedding the raw form source (captured in #1 above) in the target web page.

You can not modify the format of the form (labels etc).

Then just the jquery.google_forms.js script to your web page (you obviously need jQuery itself too).

Then just add one of the following to trigger this plugin on your google form.

Redirect Only:

	$('form').googleForm('thanks.html');

onsubmit Only:

	$('form').googleForm(function () {
        // Form is submitted... do your stuff here
    });

onsubmit and redirect:

	$('form').googleForm({
        onsubmit: function () {
	        // Form is submitted... do your stuff here
        },
        redirect: 'thanks.html'
    });
