var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

var SCOPE = ["https://www.googleapis.com/auth/plus.login",
					"https://mail.google.com/", 
					"https://www.googleapis.com/auth/gmail.modify", 
					"https://www.googleapis.com/auth/gmail.readonly"];
					
var loadEmails = function() {
	gapi.load('auth', function() {
		gapi.auth.authorize(
		{
			'client_id': gapi_clientId,
			'scope': SCOPE,
			'immediate': false
		}).then(function() {
			var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
			
			$("#login").html("Greetings " + profile.getName())
		
			gapi.load('client', function() {
				gapi.client.load('gmail', 'v1').then(function() {
					var resp = gapi.client.request({"path": "https://www.googleapis.com/gmail/v1/users/me/threads"});
					resp.execute(function(a) {console.log(a)});
				});	
			});
		});
	});
};

var onFailure = function() {
	alert("Sorry! But you must sign in with your Google account to use this service.");
}

var initAuth = function() {
	gapi.load("auth2", function() {
		gapi.auth2.init({"client_id": gapi_clientId}).then(function() {
			gapi.signin2.render("login", 
			{
			   "width": 300,
			   "theme": "dark",
			   "onsuccess": loadEmails,
			   "onfailure": onFailure
			})
		})
	});
};

$.getScript("https://apis.google.com/js/platform.js", initAuth);