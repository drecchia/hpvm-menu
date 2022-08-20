const { src, dest, watch, series } = require('gulp');

const concat = require('gulp-concat');
const minify = require('gulp-minify');

/** Run all scripts. */
exports.all = (cb) => {
    return series(AllInOne, AllInOneSidebar, Independent)(cb);
};

const dist = {
    'files': [
        'src/js/iconbar.js',
        'src/js/sidebar.js',
        'src/js/sidebar-search.js',
        'src/js/fuzzy-search.js',
        'src/js/overlay.js',
        'src/js/mixin.js',   
    ],
    'sidebarAll': [
        'src/js/sidebar.js',
        'src/js/sidebar-search.js',
    ],
    'outputFolder': 'dist/js',
}

// Transpile the speicfied TS files (defaults to all TS files) to JS.
const AllInOne = (cb, input, output) => {
    return src(dist.files)
        .pipe(concat('all.js'))    
        .pipe(minify({
            ext:{
                src:'.debug.js',
                min:'.min.js'
            },
        }))
        .pipe(dest(dist.outputFolder));
};

const AllInOneSidebar = (cb, input, output) => {
    return src(dist.sidebarAll)
        .pipe(concat('sidebar-w-search.js'))    
        .pipe(minify({
            ext:{
                src:'.debug.js',
                min:'.min.js'
            },
        }))
        .pipe(dest(dist.outputFolder));
};

const Independent = (cb, input, output) => {
    return src(dist.files)
    .pipe(minify({
        ext:{
            src:'.debug.js',
            min:'.min.js'
        },
    }))
    .pipe(dest(dist.outputFolder));
};

/** Put a watch on all files. */
exports.watch = CSSwatch = cb => {
    return watch(dist.files)
        .on('change', path => {
            console.log('Change detected to .scss file "' + path + '"');
            series(AllInOne, AllInOneSidebar, Independent)(() => {
                console.log('JS compiled and concatenated.');
            });
    });
};