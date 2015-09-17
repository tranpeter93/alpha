var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

var SCOPE = ["https://www.googleapis.com/auth/plus.login",
					"https://mail.google.com/", 
					"https://www.googleapis.com/auth/gmail.modify", 
					"https://www.googleapis.com/auth/gmail.readonly"];

$(document).ready(function() {
	gapi.load('auth', function() {
		gapi.auth.authorize(
		{
				'client_id': gapi_clientId,
				'scope': SCOPE,
				'immediate': false
		});
		
		gapi.load('client', function() {
			gapi.client.load('gmail', 'v1').then(function() {
               var resp = gapi.client.request({"path": "https://www.googleapis.com/gmail/v1/users/me/threads"});
               resp.execute(function(a) {console.log(a)});
            });	
		});
	});
});
