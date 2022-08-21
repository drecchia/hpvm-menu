# HPVM-MENU
######  _Hyper Parametrizable Vanilla Menu_

---

Design to address long list of items (~180) and almost no dependecies. Hpvm-Menu is a _First Class_ solution for webapps off-canvas menus with sliding submenus support. It is very small (~16Kb) and customizable through a wide range of options.


[Online Demo](https://jsfiddle.net/ro9zecp8/1/)

Need extra help? Have a look at [the examples](https://github.com/drecchia/hpvm-menu/tree/master/examples) folder. Fill an [issue](https://github.com/drecchia/hpvm-menu/issues) if necessary.<br />

---

### Features

- [x] 100% VanillaJS
- [x] Flexbox based
- [x] Theme support
- [x] Off-Canvas sidebar
- [x] Custom sort support
- [x] Forced order support
- [x] Custom item renderer
- [x] Auto managed favorites
- [x] Native support for external icons
- [x] Support for search in extra tags
- [x] Support for fuzzy search ( dep on fuse.js )
- [x] Support for nested lists using dropdrown and divide
- [x] No external dependencies ( except Fontawesome )
- [x] Modules can be used independently ( Iconbar, Sidebar, Overlay, Search )

---

![Demo](imgs/demo.gif?raw=true "Custom Item Renderer")

--- 

## Quick start

### Install

This package can be installed with:

- [npm](https://www.npmjs.com/package/hpvm-menu): `npm install --save hpvm-menu`

Or download the [latest release](https://github.com/drecchia/hpvm-menu/dist).

### CDN

- [jsdeliver](https://www.jsdelivr.com/package/npm/hpvm-menu)


### Including Hpvm Menu

#### Script and Css tag
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hpvm-menu@1.0.0/dist/css/all.css">

<script src="https://cdn.jsdelivr.net/npm/hpvm-menu@1.0.0/dist/js/all.min.js"></script>
```

## Usage

Be sure to call the Hpvm once your menu element is available in the DOM.


#### HTML menu structure with all components

```html
<div class="icon-bar container">
	<div class="icon-bar-top">
		<!-- <a class="tooltip" href="#"><i class="fa fa-bell fa-beat" style="--fa-beat-scale: 2.5;"></i><span class="tooltiptext">Alertas</span></a>  -->
	</div>
	<div class="icon-bar-bottom">
		<!-- <a class="tooltip icon-bar-item danger" href="#"><i class="fa fa-sign-out"></i><span class="tooltiptext">Sair</span></a> -->
	</div>
</div>

<div id="overlay">
	<i class="fa-solid fa-sync fa-spin fa-5x is-loaded" style="--fa-animation-duration: 5s;"></i>
</div>

<div class='wrapper' />

<div class='sidebar'>
	<div class='sidebar-widelogo'>
		<img src="https://via.placeholder.com/220x55/e0e0e0/000000/?text=LOGO+HERE" alt="Logo" />
	</div>
	<div id='sidebarTitle' class='sidebar-title'>
		Title Here
	</div>
	<div class='search'>
		<input class='searchInput' placeholder='Search for...' type="text"
			onkeyup="HpvMenu.sidebar.filterFn(this, 'menuItems')" />
		<button class='btn btn-outline-success' type='button'><i class='fas fa-search'></i></button>
	</div>
	<ul id='menuItems' class='nav'>
	</ul>
	<div id='sideBarStatusText'>
		<p>No Item Available</p>
	</div>
</div>

<div id='content' class="content">
	Your content goes here
</div>
```

#### Vanilla JS

```js
document.addEventListener('DOMContentLoaded', function() {

  	// iconbar entry
	HpvMenu.iconbar.registerEntry({
		'parentCls': 'icon-bar-top',
		'innerHtml': '<i class="fa fa-house-chimney-user"></i>',
		'tooltiptext': 'Central do Usuário',
		'onClick': function (event) {
			// mixin connects components
			HpvMenu.mixin.handleIconBarClick(event, 'home');
		}
	});

	// sidebar entry
	HpvMenu.sidebar.registerEntry({
		'id': 'home',
		'title': 'My Home Menu',
		'overlay': true,
		'sortItens': true,
		'search': {
			'enabled': true,
			'mode': 'fuzzy',
			'fields': ['title'],
		},
		'itens': [
			{ 'type': 'entry', 'title': 'Item 1' },
			{ 'type': 'entry', 'title': 'Item 2' }
		],
		'onItemClick': function (event, entry, item) {
			console.log('Item is clicked: ', item);
		}
	});

});
```

## Themes

Hpvm currently has 2 themes, the default and Dark. To use Dark theme simply import theme css after hpvm css file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hpvm-menu@1.0.0/dist/css/themes/dark-grey.css">
```

## Methods

The Hpvm API offers a couple of methods to control components isolated or as a group ( mixin ).

#### HpvMenu.iconbar.registerEntry(entry)

Register a new iconbar entry.

```js
HpvMenu.iconbar.registerEntry({
	'parentCls': 'icon-bar-bottom',
	'classes': ['danger'],
	'innerHtml': '<i class="fa fa-sign-out"></i>',
	'tooltiptext': 'Exit',
	'onClick': function (event) {
		console.log('exit clicked');
	}
});
```

#### HpvMenu.iconbar.setActive(el)

Set programmatically an entry(el) of iconbar as active.

```js
let iconbar = document.getElementsByClassName('icon-bar')[0];
let firstAnchor = iconbar.getElementsByTagName('a')[0];
HpvMenu.iconbar.setActive(firstAnchor);
```

#### HpvMenu.iconbar.removeLastActive()

Deactivate any active entry on iconbar.

```js
HpvMenu.iconbar.removeLastActive();
```

#### HpvMenu.sidebar.registerEntry(entry)

Register a new sidebar entry.

```js
HpvMenu.sidebar.registerEntry({
	'id': 'dashboard',
	'title': 'Dashboard',
	'overlay': true,
	'sortItens': true,
	'search': true,
	'itens': [],
	'onItemClick': function (event, entry, item) {
		console.log("Item clicked: ", item);
	}
});
```

#### HpvMenu.sidebar.show(id)

Show sidebar with rendered content from an registered entry.

```js
HpvMenu.sidebar.show('dashboard');
```

#### HpvMenu.sidebar.close()

Close sidebar if openned.

```js
HpvMenu.sidebar.close();
```

#### HpvMenu.overlay.show( isIconBarVisible, isSidebarVisible )

Show overlay above user content, parameters help calculate the initial position.

```js
HpvMenu.overlay.show(true, false);
```

#### HpvMenu.overlay.hide()

Hide overlay if active.

```js
HpvMenu.overlay.hide();
```

#### HpvMenu.overlay.showLoading( isIconBarVisible, isSidebarVisible )

Show overlay above user content with an spinning icon. Parameters help calculate the initial position.

```js
HpvMenu.overlay.showLoading(true, false);
```

#### HpvMenu.overlay.hideLoading()

Hide overlay and spinning if active.

```js
HpvMenu.overlay.hide();
```

#### HpvMenu.mixin.closeSideBar()

Closes sidebar, hides overlay and remove iconbar active entries.

```js
HpvMenu.mixin.closeSideBar();
```

#### HpvMenu.mixin.handleIconBarClick( event, id )

Set iconbar entry as active, opens sidebar and display the overlay. Can be used on while registering iconbar entry with 'onClick' event handler.

```js
HpvMenu.iconbar.registerEntry({
	'parentCls': 'icon-bar-top',
	'innerHtml': '<i class="fa fa-star"></i>',
	'tooltiptext': 'Bookmarks',
	'onClick': function (event) {
		HpvMenu.mixin.handleIconBarClick(event, 'bookmarks');
	}
});
```

#### HpvMenu.mixin.setIconBarActive( el )

Wrapper around iconbar.setIconBarActive, closing the sidebar if users click on an open entry.

```js
let iconbar = document.getElementsByClassName('icon-bar')[0];
let firstAnchor = iconbar.getElementsByTagName('a')[0];
HpvMenu.mixin.setIconBarActive( firstAnchor );
```


### TODO

- [ ] Responsive layout ( Missing mobile yet )
- [ ] Customize scrollbar
- [ ] Expansive iconbar as dropdown item
- [ ] Stick section label on scroll

### Learn more ( In Progress )

-   [Tutorial]
-   [Options]
-   [Add-ons]
-   [API]

### Licence

The Hpvm-Menu code is licensed under the [Apache-2.0 licence](https://raw.githubusercontent.com/drecchia/hpvm-menu/master/LICENSE).<br />


### Similar projects:

- [MMenu.js](https://mmenujs.com/)
- [HcOffcanvasNav](https://github.com/somewebmedia/hc-offcanvas-nav)
- [OffSide.js](https://github.com/toomuchdesign/offside)
- [SidebarJS](https://github.com/SidebarJS/sidebarjs)