var HpvMenu = HpvMenu || {};

HpvMenu.iconbar = {
	registerEntry: function (entry) {
		let parent = document.getElementsByClassName(entry.parentCls)[0];

		let anchor = document.createElement('a');

		if (entry.hasOwnProperty('onClick')) {
			anchor.addEventListener('click', entry.onClick);
		}

		if (entry.hasOwnProperty('classes')) {
			for (const className of entry.classes) {
				anchor.classList.add(className);
			}
		}

		anchor.innerHTML = entry.innerHtml;

		if (entry.hasOwnProperty('tooltiptext')) {
			anchor.classList.add('tooltip');

			let tooltip = document.createElement('span');
			tooltip.classList.add('tooltiptext');
			tooltip.innerHTML = entry.tooltiptext;

			anchor.appendChild(tooltip);
		}

		parent.appendChild(anchor);
	}, // registerEntry
	removeLastActive: function () {
		// remove last active
		let ibar = document.getElementsByClassName('icon-bar')[0];
		let actives = ibar.getElementsByClassName('active');

		if (actives.length > 0) {
			actives[0].classList.remove('active');
		}
	}, // removeLastActive
	setActive: function (el) {
		HpvMenu.iconbar.removeLastActive();

		// set current as active
		el.classList.add('active');
	} // setActive
};
