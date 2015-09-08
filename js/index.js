$(document).ready(function() {

	$("#login").click(function() {
		gapi.load('auth2', function() {
			client_id: "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";
		});

		var auth = gapi.auth2.init({client_id: "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com",
		fetch_basic_profile: true});		
		
		auth.signIn();
	});
});