var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

$(document).ready(function() {
	$("#login").click(function() {
		gapi.load('auth2', function() {
			var auth2 = gapi.auth2.init({client_id: gapi_clientId});
			
			auth2.attachClickHandler("login", {}, onSuccess, onFailure);
		});
	});
});

var onSuccess = function(user) {
	console.log('Signed in as ' + user.getBasicProfile().getName())
	//window.location.href = "http://ec2-52-88-95-120.us-west-2.compute.amazonaws.com/staging/alpha.html"
}

var onFailure = function(error) {
    console.log(error);
};