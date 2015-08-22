(function(){
	console.log('begin clear');
	var $ = function(s){
		return document.querySelector(s);
	};
	
	var button = $('#clear');
	button.addEventListener('click', function() {
		clearAds();
	})

	function clearAds() {
		console.log('begin clear');
		document.querySelector('.m').style.backgroundColor="green"
		console.log('end clear');
	}
})();