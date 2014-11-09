$(function(){
	var URL_CHANGE_INTERVAL = 100;
	var current_url = window.location.href;
	
	console.log('loaded');

	init();


	function init() {
		//add_hide_labels();
		//listen_for_url_change();
		//
		$('body').on('mouseenter', '.color-label-list li', add_hide_label);
		$('body').on('mouseleave', '.color-label-list li', remove_hide_label);
	}

	function listen_for_url_change() {
		var timer = window.setInterval(function(){
			
			if (window.location.href != current_url) {
				current_url = window.location.href;
				console.log('url change');
				add_hide_labels();
			}

		}, URL_CHANGE_INTERVAL);
	}

	function add_hide_label() {
		console.log('add_hide_label');

		var $color_label = $(this);
	
		$color_label.addClass('dj-filter-list-item');
		
		var $hide_icon = $('<div class="dj-filter-item-hider"></div>');
		$hide_icon.on('click', on_hide_item_click);

		$color_label.prepend($hide_icon);
	}

	function remove_hide_label() {
		console.log('remove_hide_label');

		var $hide_icon = $(this).find('.dj-filter-item-hider');
		$hide_icon.remove();	
	}

	function on_hide_item_click() {
		console.log('on_hide_item_click');

		var $hide_icon = $(this);
		var $filter_item = $hide_icon.next('.filter-item.color-label');
		var label = $filter_item.data('label');

		$('.issue-list-item .label[data-name="' + label + '"]')
			.closest('.issue-list-item')
			.hide();

		$filter_item.addClass('strike');
	}

});