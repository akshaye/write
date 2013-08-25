$(function() {
	var showHtml = function() {
		var html = marked(editor.val());
		output.html(html);
		editor.hide();
		output.fadeIn();
	}

	var showMarkdown = function() {
		output.hide();
		editor.fadeIn();
		editor.focus();
	}

	var switchView = function() {
		editor.is(":visible") ? showHtml() : showMarkdown();
		return false;
	}

	var editor = $('#editor');
	var output = $('#output');

	$(document).bind('keydown', 'shift+tab', switchView);
	editor.bind('keydown', 'shift+tab', switchView);
	
	output.hide();
	editor.focus();

	var test = "# My First Post\r\n"+
"\r\n"+
"Hello everyone, I hope you're doing well this fine morning! I've been thinking about starting a new project for quite some time now and yesterday, finally, i got inclined to start writing my own version of text editor. I've been impressed with iAWriter since i've seen it and i always wanted to use something similar.\r\n"+
"\r\n"+
"## Problem with iAWriter\r\n"+
"\r\n"+
"Though iAWriter is probably the best text editing program i've seen in my life, problem with iAwriter is that it's available only on Mac. Having something similar that works on the web would be something cool.\r\n"+
"\r\n"+
"### Third level heading\r\n"+
"\r\n"+
"Since i can't think of anything else to write at the moment, this is just some random text to test this thing.\r\n"+
"\r\n"+
"* First item in list\r\n"+
"* Second item in list\r\n"+
"* Last item in list\r\n"+
"\r\n"+
"So i'm guessing, we'd add some text to verify **bold** and *underline* text as well. Also try _another rule for underline text_ while you're at it.\r\n"+
"\r\n"+
"Do you want to add another test to verify [Hyperlinks](www.google.com) just to see how it looks?";

	editor.val(test);
});