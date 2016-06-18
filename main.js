(function() {
	// var elem = document.getElementById( 'box' );

	// elem.onclick = function() {
	// this.style.backgroundColor = 'blue';
	// }

	var buttons = document.getElementsByTagName('button');
	console.log(buttons);
	for (var i = 0, len = buttons.lenght; i < len; i++){
		buttons[i].onclick = function () {
			if ( this.id === 'on' ){
				document.body.className = 'day';
			} else if ( this.id === 'off' ){
				document.body.className = 'night';
			}	
		};
	};


})();