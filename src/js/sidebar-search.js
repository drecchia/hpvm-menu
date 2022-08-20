var HpvMenu = HpvMenu || {};

HpvMenu.sidebarSearch = {
	tagRegistry: [],

	_hideAllEntries: function ( target ) {
		let li = target.getElementsByTagName("li");

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			li[i].style.display = "none";
		}
	}, // _hideAllEntries

	_showAllEntries: function ( target ) {
		let li = target.getElementsByTagName("li");

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			li[i].classList.remove('sidebar-dropdown-open-filter');
			let dividers = li[i].getElementsByClassName('sidebar-divide');
			for (const divide of dividers) {
				divide.style.display = '';
			}

			li[i].style.display = "";
		}
	}, // _showAllEntries

	_showFilteredEntry: function (li) {
		let dropdown = li.closest('.sidebar-dropdown');

		if (dropdown) {
			dropdown.classList.add('sidebar-dropdown-open-filter');
			dropdown.style.display = '';
		}

		// fine, now lets show only previous divide
		let sibblingMatch = false;
		let lastSibbling = li.parentElement.previousElementSibling;

		while (lastSibbling && sibblingMatch == false) {
			if (lastSibbling.classList.contains('sidebar-divide')) {
				sibblingMatch = true;
				break;
			}
			lastSibbling = lastSibbling.previousElementSibling;
		}

		if (sibblingMatch) {
			let dividers = li.parentElement.parentElement.getElementsByClassName('sidebar-divide');
			for (let i = 0; i < dividers.length; i++) {
				if (dividers[i] !== lastSibbling) {
					dividers[i].style.display = 'none';
				}
			}
		}
	},

	filterFn: function (el, id) {
		// Declare variables
		let words = el.value.toUpperCase();
		let ul = document.getElementById(id);
		let li = ul.getElementsByTagName("li");

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			if (words.length == 0) {
				li[i].classList.remove('sidebar-dropdown-open-filter');
				let dividers = li[i].getElementsByClassName('sidebar-divide');
				for (const divide of dividers) {
					divide.style.display = '';
				}
			}

			let anchor = li[i].getElementsByTagName("a")[0];

			if (!anchor) {
				continue;
			}

			if (anchor.innerText.toUpperCase().indexOf(words) > -1) {
				if (words.length > 0) {
					HpvMenu.sidebar._showFilteredEntry(li[i]);
				}

				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}, // filterFn

	_registerTags: function ( item ) {
		// add item to tagRegistry arry only once
		if ( !HpvMenu.sidebar.tagRegistry.find(x => x.id == item.id) ) {
			HpvMenu.sidebar.tagRegistry.push(item);
		}
	}, // _registerTags
};

HpvMenu.sidebar = Object.assign(HpvMenu.sidebar, HpvMenu.sidebarSearch);
delete HpvMenu.sidebarSearch;