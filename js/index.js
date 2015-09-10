var gapi_clientId = "43916539739-kg913v794v0egih5l4en19eermk35qgl.apps.googleusercontent.com";

$(document).ready(function() {
	gapi.load('auth2', function() {
		var auth2 = gapi.auth2.init({client_id: gapi_clientId});
		
		gapi.hangout.render('login', 
		{
			'render': 'createhangout',
			'initial_apps': 
			{
				'app_id': '43916539739'
			},
			'widget_size': 250
		})
	});

});
