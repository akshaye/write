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
});