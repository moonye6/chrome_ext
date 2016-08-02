(function(w, $){
	var $container = $('.container > div');

	function search(q) {
		$.ajax({
			url:'https://api.github.com/search/repositories',
			data: {
				q: q
			},
			success: function(res) {
                var items = res && res.items || [];
				items = items.slice(0, 10);
				renderItem(items);
			},
			error: function(res) {
				alert(res.responseJSON && res.responseJSON.message || res.responseText);
			}
		});
	}


	function renderItem(items) {
		var html = [];
		html.push('<ul class="list-group">');
		items.forEach(function(item ,i) {
			var t = '<li class="list-group-item">\
				<a class="res-link" href="' + item.html_url+ '">\
				<p class="res-name">'+item.full_name+'</p></a>\
				<p class="res-des">'+item.description+'</p>\
				</li>'
			html.push(t)
		});
		html.push('</ul>');
		$container.html(html.join(''));
	}

	(function bindEvent() {
		$('.input').on('input', function(e) {
			var $this = $(this);
			var val = $this.val();
			if(val) {
				search($this.val());
			} else {
				$container.html('');
			}
		})
	})();
})(window, jQuery);
