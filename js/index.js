$(document).ready(function() {
	$("#login").click(function() {
		gapi.auth2.init({
			client_id: "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com"
		})		
	});
});