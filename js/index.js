var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

var SCOPE = ["https://www.googleapis.com/auth/plus.login",
					"https://www.googleapis.com/auth/youtube"];

//GLOBALS FOR TESTING
var YT, listHeader, YT_LIST, listVid, playlistArr = [];					
					
var handleYoutubeApi = function() {	
	gapi.client.load('youtube', 'v3', function() {
		YT = gapi.client.youtube.playlists.list({"part": "snippet", "mine": true})
		YT.execute(function (playlist) {
			
			// FOR each playlist 
			for (plist of playlist.result.items) {				
				listHeader = document.createElement("h3");
				$(listHeader).html(plist.snippet.title);
				//$(listHeader).attr("id", "list" + idx);
				$("#playlist-container").append(listHeader);
				playlistArr.push(plist.id);
			};
		});
		
		// YT_LIST = gapi.client.youtube.playlistItems.list({"part": "snippet", "playlistId": playlistArr, "maxResults": 50});
		// YT_LIST.execute(function (vidList) {
			// var idx = 0;
			
			// // FOR each video in a playlist
			// for (vid of vidList.items) {
				// listVid = document.createElement("h5");
				// $(listVid).html(vid.snippet.title);
				// $("#list"+idx).append(listVid);
			// }
		// });
	});
}	
	
// Initializes gapi.auth
var handleSignIn = function(googleUser) {
	gapi.load('auth', function() {
		gapi.auth.authorize(
		{
			'client_id': gapi_clientId,
			'scope': SCOPE,
			'immediate': false
		}).then(function() {			
			$("#login").hide();
		
			gapi.load('client', function() {
				handleYoutubeApi();
			});
		});
	});
};

var onFailure = function() {
	alert("Sorry! But you must sign in with your Google account to use this service.");
}

// Authenticates user
var initAuth = function() {
	gapi.load("auth2", function() {
		gapi.auth2.init({"client_id": gapi_clientId}).then(function() {
			gapi.signin2.render("login", 
			{
			   "width": 200,
			   "theme": "dark",
			   "onsuccess": handleSignIn,
			   "onfailure": onFailure
			})
		})
	});
};

// Obtain GAPI script then callsback to OAUTH code
$.getScript("https://apis.google.com/js/platform.js", initAuth);