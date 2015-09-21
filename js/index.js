var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

var SCOPE = ["https://www.googleapis.com/auth/plus.login",
					"https://www.googleapis.com/auth/youtube"];
	
// Initializes gapi.auth
// success callback: loadEmails
var handleSignIn = function(googleUser) {
	gapi.load('auth', function() {
		gapi.auth.authorize(
		{
			'client_id': gapi_clientId,
			'scope': SCOPE,
			'immediate': false
		}).then(function() {			
			$("#login").html("Greetings " + googleUser.getBasicProfile().getName());
			$("#login").after("<p id='playlists'></p>");			
		
			gapi.load('client', function() {
				
				//YOUTUBE API
				gapi.client.load('youtube', 'v3', function() {
					var YT = gapi.client.youtube.playlists.list({"part": "id", "mine": true})
					YT.execute(function (playlist) {
						for (plist of playlist.items)
						console.log(plist.id);
					});
				});
			});
		});
	});
};

var onFailure = function() {
	alert("Sorry! But you must sign in with your Google account to use this service.");
}

// Initializes gapi.auth2
// success callback: inits gapi.auth
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

$.getScript("https://apis.google.com/js/platform.js", initAuth);