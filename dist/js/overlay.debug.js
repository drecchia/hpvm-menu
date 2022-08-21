var HpvMenu = HpvMenu || {};

HpvMenu.overlay = {
	clickHandler: function() {
		HpvMenu.overlay.hide();
	},

	show: function ( usingIconBar = true, usingSidebar = true ) {
		let total = 0;
	
		if (usingIconBar) {
			let iconbarWidth = document.getElementsByClassName("icon-bar")[0].clientWidth;
			total += iconbarWidth;
		}
		
		if (usingSidebar) {
			let sidebarWidth = document.getElementsByClassName("sidebar")[0].clientWidth;
			total += sidebarWidth; 
			
			// check if scrollbar is visible
			let scrollbarHeight = document.getElementsByClassName("sidebar")[0].scrollHeight;
			let clientHeight = document.getElementsByClassName("sidebar")[0].clientHeight;
	
			if ( scrollbarHeight > clientHeight ) {
				total += 15;
			}
		}
	
		document.getElementById("overlay").style.left = total + "px";
		document.getElementById("overlay").style.display = "block";
	
		// add overlay click listener
		document.getElementById('overlay').addEventListener('click', HpvMenu.overlay.clickHandler);
	}, // show
	
	showLoading: function  ( usingIconBar = true, usingSidebar = false ) {
		HpvMenu.overlay.show( usingIconBar, usingSidebar );
	
		document.getElementById("overlay").firstChild.classList.remove('is-loaded');
	
		// remove overlay click listener
		document.getElementById("overlay").removeEventListener('click', HpvMenu.overlay.clickHandler);
	}, // showLoading
	
	hideLoading: function () {
		document.getElementById("overlay").firstChild.classList.add('is-loaded');
		HpvMenu.overlay.hide();
	}, // hideLoading
	
	hide: function () {
		document.getElementById("overlay").style.display = "none";
		// remove overlay click listener, so we wont have many active listeners
		document.getElementById("overlay").removeEventListener('click', HpvMenu.overlay.clickHandler);
	}, // hide
};