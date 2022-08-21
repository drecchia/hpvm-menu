var HpvMenu = HpvMenu || {};

HpvMenu.sidebar = {
	fav: JSON.parse(localStorage.getItem('favoritos')) || [],

	registry: {},
	
	registerEntry: function (entry) {
		HpvMenu.sidebar.registry[entry.id] = entry;
	}, // registerEntry
	
	handleStarClick: function (event, entry, item) {
		// add item to favoritos if not already added
		if (!HpvMenu.sidebar.fav.find(x => x.title == item.title)) {
			// clone item.path if exists, using json.parse and json.stringify
			let path = item.path ? JSON.parse(JSON.stringify(item.path)) : [];
			item.savedPath = path;
	
			HpvMenu.sidebar.fav.push(item);
			localStorage.setItem('favoritos', JSON.stringify(HpvMenu.sidebar.fav));
			// add class nav-star-active to span
			event.target.parentElement.classList.add('nav-star-active');
		} else {
			// remove item from favoritos if already added
			let index = HpvMenu.sidebar.fav.findIndex(x => x.title == item.title);
			HpvMenu.sidebar.fav.splice(index, 1);
			localStorage.setItem('favoritos', JSON.stringify(HpvMenu.sidebar.fav));
			// remove class nav-star-active from span
			event.target.parentElement.classList.remove('nav-star-active');
		}
	}, // handleStarClick
	
	_generateId: function( size ) {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for ( var i = 0; i < size; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}, // _generateId
	
	_sort: function (entry, itens) {
		if (entry.hasOwnProperty('sortItens') && entry.sortItens == true) {
			if ( entry.hasOwnProperty('sortFn') ) {
				itens = entry.sortFn( entry, itens );
			} else {
				// sort itens by title if item do not have defined order attribute
				itens.sort(function (a, b) {
					if (a.hasOwnProperty('order') && b.hasOwnProperty('order')) {
						return a.order - b.order;
					} else if (a.hasOwnProperty('order') && !b.hasOwnProperty('order')) {
						return -1;
					} else if (!a.hasOwnProperty('order') && b.hasOwnProperty('order')) {
						return 1;
					} else {
						if (a.title.toLowerCase() < b.title.toLowerCase()) {
							return -1;
						}
						if (a.title.toLowerCase() > b.title.toLowerCase()) {
							return 1;
						}
						return 0;
					}
				});
			}
		}
	}, // _sort
	
	_setTitle: function (entry) {
		document.getElementById('sidebarTitle').innerHTML = entry.title || 'Title';
	}, // _setTitle
	
	_removeAllItens: function (target) {
		while (target.firstChild) {
			target.firstChild.remove();
		}
	}, // _removeAllItens
	
	_createDivide: function (target, entry, item, path ) {
		let listItem = document.createElement('li');
		listItem.classList.add('sidebar-divide');
		listItem.innerHTML = item.title;
	
		// clone array path using json
		let pathClone = JSON.parse(JSON.stringify(path));
		
		pathClone.push( item.title );
		item.path = pathClone;
		item.id = item.id || HpvMenu.sidebar._generateId(10);
		
		listItem.id = item.id;
	
		target.appendChild(listItem);
	
		item.childs = item.childs || [];
	
		if (item.childs.length > 0) {
			HpvMenu.sidebar._sort(entry, item.childs);
	
			let ul = document.createElement('ul');
			ul.classList.add('sidebar-divide-child');
			listItem.parentElement.appendChild(ul);
	
			for (const child of item.childs) {
				child.path = child.path || [];
	
				if (child.type == 'divide') {
					HpvMenu.sidebar._createDivide(ul, entry, child, pathClone);
				} else if (child.type == 'dropdown') {
					HpvMenu.sidebar._createDropDown(ul, entry, child, pathClone);
				} else {
					if (entry.hasOwnProperty('itemRenderer')) {
						HpvMenu.sidebar._createItemUsingItemRenderer(ul, entry, child, pathClone);
					} else {
						HpvMenu.sidebar._createItem(ul, entry, child, pathClone);
					}
				}
			}
		}
	
		return listItem;
	}, // _createDivide
	
	_createItemUsingItemRenderer: function (target, entry, item, path, autoAppend = true) {
		let itemResult = entry.itemRenderer(target, entry, item, path);
	
		path.push( item.title );
		item.path = path;
		item.id = item.id || HpvMenu.sidebar._generateId(10);
		
		itemResult.id = item.id;
		HpvMenu.sidebar._registerTags( item );
	
		if (entry.hasOwnProperty('onItemClick')) {
			itemResult.addEventListener('click', function (event) {
				entry.onItemClick(event, entry, item);
			});
		}
	
		if ( autoAppend ) {
			target.appendChild(itemResult);
		}
	
		return itemResult;
	}, // _createItemUsingItemRenderer
	
	_createItem: function (target, entry, item, path, autoAppend = true) {
		let listItem = document.createElement('li');
		let anchor = document.createElement('a');
	
		item.path = path;
		item.id = item.id || HpvMenu.sidebar._generateId(10);
		listItem.id = item.id;
		
		HpvMenu.sidebar._registerTags( item );
	
		if (item.href) {
			anchor.href = item.href;
		} else {
			anchor.href = '#';
			anchor.classList.add('sidebar-anchor-no-href');
		}
	
		if (item.innerHtml) {
			anchor.innerHTML = item.innerHtml + item.title;
		} else {
			anchor.innerHTML = '<i class="fa-solid fa-circle fa-transparent"></i>' + item.title;
		}
	
		let spanStar = document.createElement('span');
		spanStar.classList.add('nav-right');
		spanStar.classList.add('nav-star');
	
		// check if array contains the item with same title, so its marked as favoritos
		if (HpvMenu.sidebar.fav.find(x => x.title == item.title)) {
			spanStar.classList.add('nav-star-active');
		}
	
		let iconStar = document.createElement('i');
		iconStar.classList.add('fa-solid');
		iconStar.classList.add('fa-star');
	
		spanStar.appendChild(iconStar);
	
		anchor.innerHTML += spanStar.outerHTML;
	
		listItem.appendChild(anchor);
	
		if ( autoAppend ) {
			target.appendChild(listItem);
		}
	
		if (entry.hasOwnProperty('onItemClick')) {
			anchor.addEventListener('click', function (event) {
				event.preventDefault();
				event.stopPropagation();
				// if event.target contain class nav-star, do not call onItemClick
				if (!event.target.parentElement.classList.contains('nav-star') && !event.target.classList.contains('nav-star')) {
					entry.onItemClick(event, entry, item);
				} else {
					HpvMenu.sidebar.handleStarClick(event, entry, item);
				}
			});
		} // end if onItemClick
	
		return listItem;
	}, // _createItem
	
	_createDropDown: function (target, entry, item, path ) {
		let listItem = document.createElement('li');
		listItem.classList.add('sidebar-dropdown');
	
		path.push( item.title );
		item.path = path;
		item.id = item.id || HpvMenu.sidebar._generateId(10);
		listItem.id = item.id;
	
		let anchor = document.createElement('a');
	
		if (item.innerHtml) {
			anchor.innerHTML = item.innerHtml + item.title;
		} else {
			anchor.innerHTML = '<i class="fa-solid fa-circle fa-transparent"></i>' + item.title;
		}
	
		anchor.innerHTML += '<span class="nav-right"><i class="arrow arrow-right"></i></span>'
	
		listItem.appendChild(anchor);
		target.appendChild(listItem);
	
		item.childs = item.childs || [];
	
		if (item.childs.length > 0) {
			HpvMenu.sidebar._sort(entry, item.childs);
	
			let ul = document.createElement('ul');
			ul.classList.add('sidebar-dropdown-child');
			listItem.appendChild(ul);
	
			for (const child of item.childs) {
				child.path = child.path || [];
	
				if (child.type == 'divide') {
					HpvMenu.sidebar._createDivide(ul, entry, child, path);
				} else if (child.type == 'dropdown') {
					HpvMenu.sidebar._createDropDown(ul, entry, child, path);
				} else {
					HpvMenu.sidebar._createItem(ul, entry, child, path);
				}
			}
		} // end if childs.length > 0
	
		anchor.addEventListener('click', function (event) {
			// change icon of dropdown to up arrow
			let dropdown = event.currentTarget.getElementsByClassName('arrow-right')[0];
			if (dropdown) {
				dropdown.classList.remove('arrow-right');
				dropdown.classList.add('arrow-down');
	
				event.currentTarget.parentElement.classList.add('sidebar-dropdown-open');
			} else {
				dropdown = event.currentTarget.getElementsByClassName('arrow-down')[0];
				dropdown.classList.remove('arrow-down');
				dropdown.classList.add('arrow-right');
	
				event.currentTarget.parentElement.classList.remove('sidebar-dropdown-open');
			}
		});
	
		return listItem;
	}, // _createDropDown
	
	_setStatusText: function (target, entry) {
		if (target.childElementCount == 0) {
			document.getElementById("sideBarStatusText").style.display = 'flex';
		} else {
			document.getElementById("sideBarStatusText").style.display = 'none';
		}
	}, // _setStatusText
	
	_isRegistered: function (id) {
		return HpvMenu.sidebar.registry.hasOwnProperty(id);
	}, // _isRegistered
	
	_getEntry: function (id) {
		if (HpvMenu.sidebar._isRegistered(id)) {
			return HpvMenu.sidebar.registry[id];
		}
	}, // _getEntry
	
	show: function (id) {
		if (HpvMenu.sidebar._isRegistered(id)) {
			let target = document.getElementById('menuItems');
			target.className = 'nav menu-' + id;
	
			let entry = HpvMenu.sidebar.registry[id];
	
			// reset tagRegistry
			HpvMenu.sidebar.tagRegistry = [];
	
			// clean search field
			document.getElementsByClassName('searchInput')[0].value = '';
	
			if (entry.hasOwnProperty('loadItens')) {
				entry.itens = entry.loadItens();
			}
	
			HpvMenu.sidebar._removeAllItens(target);
			HpvMenu.sidebar._setTitle(entry);
			HpvMenu.sidebar._sort(entry, entry.itens);
	
			for (const item of entry.itens) {
				let path = [ entry.title ]; // breadcrumb path
				item.path = path;
				item.id = item.id || HpvMenu.sidebar._generateId(10);
				
				HpvMenu.sidebar._registerTags( item );
	
				if (item.type == 'divide') {
					HpvMenu.sidebar._createDivide(target, entry, item, path);
				} else if (item.type == 'dropdown') {
					HpvMenu.sidebar._createDropDown(target, entry, item, path);
				} else if (item.type == 'entry') {
					if (entry.hasOwnProperty('itemRenderer')) {
						HpvMenu.sidebar._createItemUsingItemRenderer(target, entry, item, path);
					} else {
						HpvMenu.sidebar._createItem(target, entry, item, path, true);
					}
				}
			} // end for
	
			HpvMenu.sidebar._setStatusText(target, entry);
	
			// now really opens the menu
			document.getElementById("content").classList.add('isOpen');
		} // end if registered
	}, // show

	close: function () {
		document.getElementsByClassName("content")[0].classList.remove('isOpen');
	}, // close
};