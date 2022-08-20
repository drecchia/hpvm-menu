/*
	Tasks:

	$ gulp 			: Runs the "js" and "css" tasks.
	$ gulp js		: Runs the "js" tasks.
	$ gulp css		: Runs the "css" tasks.
*/

const { parallel } = require('gulp');

const js = require('./gulp/js');
const css = require('./gulp/css');

/*
	$ gulp
*/
exports.default = (cb) => {
	parallel(js.all, css.all)(cb);
};

/*
	$ gulp js
*/
exports.js = (cb) => {
	js.all(cb);
};

/*
	$ gulp css
*/
exports.css = (cb) => {
	css.all(cb);
};
