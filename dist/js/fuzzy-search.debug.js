HpvMenu.sidebar.filterFnFuzzy = function (el, id) {
	// loop registered entries in sidebar.tagRegistry[id] and use path to display items that match the search query

	// 2. Set up the Fuse instance
	const fuse = new Fuse(HpvMenu.sidebar.tagRegistry, {
		includeScore: true,
		minMatchCharLength: 3,
		threshold: 0.2,
		keys: ['title', 'tags']
	});

	let target = document.getElementById(id);
	let words = el.value.toUpperCase();
	
	if (words.length == 0) {
		HpvMenu.sidebar._showAllEntries( target );
		return;
	}

	// hide all entries
	HpvMenu.sidebar._hideAllEntries( target );

	let fuseResults = fuse.search(words);
	for ( const r of fuseResults ) {
		let elResult = document.getElementById(r.item.id);
		elResult.style.display = "";

		if ( elResult.classList.contains('sidebar-dropdown') ) {
			elResult.classList.add('sidebar-dropdown-open-filter');
			HpvMenu.sidebar._showAllEntries( elResult );
		}

		HpvMenu.sidebar._showFilteredEntry(elResult);
	}
} // filterFnFuzzy

HpvMenu.script = document.createElement('script');
HpvMenu.script.crossOrigin = 'anonymous';
HpvMenu.script.integrity = 'sha256-4sCQJabJCykTxrJFgkZFLOOYxNk+pFhCfcc8nKqu9Js=';
HpvMenu.script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.basic.min.js';

document.head.appendChild(HpvMenu.script); 

// using fuzzy search as default
HpvMenu.sidebar.filterFn = HpvMenu.sidebar.filterFnFuzzy;