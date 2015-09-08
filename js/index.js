$(document).ready(function() {
	var clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";
	
	$("#login").click(function() {
		gapi.load('auth2', function() {
			client_id: clientId;
		});

		gapi.auth2.init({client_id: clientId});		
	});
});