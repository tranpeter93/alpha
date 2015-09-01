window.fbAsyncInit = function() {
	FB.init({
	  appId      : '1057857254231943',
	  status     : true,
	  xfbml      : true,
	  version    : 'v2.4'
	});		
	
	FB.login(function(response) {
		if (response.authResponse) {
			console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', function(response) {
		    console.log('Good to see you, ' + response.name + '.');
		 });
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	});
};

$(document).ready(function() {
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{1057857254231943}',
      version: 'v2.4' 
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);

	
	/*
	(function(d, s, id) {
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); 
		 js.id = id;
		 js.src = "js/fb-sdk.js";	 
		 fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	*/
});