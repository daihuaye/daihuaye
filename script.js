use strict;

(function (window) {
    // Initialize Firebase
		var config = {
    		apiKey: "AIzaSyAjfWjbvPPIjBH_vl43IB5fR-szwT3dSlw",
    		authDomain: "daihuaye-a25ed.firebaseapp.com",
    		databaseURL: "https://daihuaye-a25ed.firebaseio.com",
    		storageBucket: "daihuaye-a25ed.appspot.com",
    		messagingSenderId: "911331947635"
		};
		firebase.initializeApp(config);
		var experiences = [];
		var db = firebase.database().ref('/experiences');
		db.on('value', function(data) {
			experiences = data.val();
			var source = $('#section-experience').html();
			var template = Handlebars.compile(source);
			var vmw = template(experiences.VMware);
			var getInsured = template(experiences.GetInsured);
			var nibbol = template(experiences.nibbol);
			var TeletracNavman = template(experiences.TeletracNavman);
			$('.experience').append(vmw, getInsured, nibbol, TeletracNavman);
		});
})(window);
