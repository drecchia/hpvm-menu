const { src, dest, watch, series } = require('gulp');

const concat = require('gulp-concat');
const minify = require('gulp-minify');

/** Run all scripts. */
exports.all = (cb) => {
    return series(AllInOne, Independent)(cb);
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