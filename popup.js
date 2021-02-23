
document.addEventListener('DOMContentLoaded', function() {
    var playSongButton = document.getElementById('playSong');
    playSongButton.addEventListener('click', function() {
    	chrome.tabs.query({active:true}, function(tab) {
			var configHttp = new XMLHttpRequest();
			configHttp.open( "GET", "./config.json", false );
        	configHttp.send( null );
			var domain = JSON.parse(configHttp.responseText).domain;
			var user = JSON.parse(configHttp.responseText).user;
			var youtubeURL = tab[0].url;
			var videoString = youtubeURL.substring((youtubeURL.indexOf("v=")+2), (youtubeURL.indexOf("v=")+13));
			var url = domain + "play" + "?user=" + user + "&youtubeURL=" + videoString;
			var xmlHttp = new XMLHttpRequest();
        	xmlHttp.open( "GET", url, false );
        	xmlHttp.send( null );
    	});
  	}, false);
}, false);
