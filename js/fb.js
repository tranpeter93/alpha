window.fbAsyncInit = function() {
	FB.init({
	  appId      : '1057857254231943',
	  status     : true,
	  xfbml      : true,
	  version    : 'v2.4'
	});		
	
	
	
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {		
			var uid = response.authResponse.userID;
			var accessToken = response.authResponse.accessToken;
			console.log("Admin: You're already logged in!");
			//window.location.href = "home.html";
			
		} 
		else if (response.status === 'not_authorized') {
			// the user is logged in to Facebook, but has not authenticated your app
			alert("Admin: You did not authenticate. Please refresh to authenticate. Thank you.");
		} 
		else {
			// the user isn't logged in to Facebook.
			FB.login(function(prompt) {
				if (prompt.authResponse) {
					console.log('Welcome!  Fetching your information.... ');
					FB.api('/me', function(prompt) {
					console.log('Good to see you, ' + prompt.name + '.');
				 });
				} else {
					console.log('User cancelled login or did not fully authorize.');
				}
			}, {scope: 'read_mailbox'});
		}
	 });
	
};

$(document).ready(function() {
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_US/sdk.js', function() {
		FB.init({
		  appId: '{1057857254231943}',
		  version: 'v2.4' 
		});     
	});
});