var HpvMenu = HpvMenu || {};

HpvMenu.mixin = {
	closeSideBar: function () {
		HpvMenu.sidebar.close();
		HpvMenu.overlay.hide();
		HpvMenu.iconbar.removeLastActive();
	}, // closeSideBar

	handleIconBarClick: function (event, id) {
		let el = event.currentTarget;

		if (el.classList.contains('active')) {
			HpvMenu.mixin.closeSideBar();
		} else {
			HpvMenu.mixin.setIconBarActive(el);
			HpvMenu.sidebar.show(id);

			let entry = HpvMenu.sidebar._getEntry(id);

			if (entry.hasOwnProperty('overlay') && entry.overlay == true) {
				HpvMenu.overlay.show();
			} // end if overlay
		}
	}, // handleIconBarClick

	setIconBarActive: function (el) {
		// clicked on an open item
		if (el.classList.contains('active')) {
			HpvMenu.mixin.closeSideBar();
			return;
		}

		HpvMenu.iconbar.setActive(el);
	}, // setIconBarActive
};

// mixin with complete behavior
HpvMenu.overlay.clickHandler = HpvMenu.mixin.closeSideBar;