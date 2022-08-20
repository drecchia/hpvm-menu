const { src, dest, watch, series } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');

/** Run all scripts. */
exports.all = (cb) => {
    return series(Independent, AllInOne, AllInOneIconbar, AllInOneSidebar, CssThemes)(cb);
};

const dist = {
    'files': [
        'src/css/iconbar.css',
        'src/css/iconbar-tooltip.css',
        'src/css/sidebar.css',
        'src/css/sidebar-search.css',
        'src/css/overlay.css',
    ],
    'iconbarAll': [ 
        'src/css/iconbar.css', 
        'src/css/iconbar-tooltip.css' 
    ],
    'sidebarAll': [ 
        'src/css/sidebar.css',
        'src/css/sidebar-search.css'
    ],
    'themes': [
        'src/css/themes/dark-grey.css',
    ],
    'outputFolder': 'dist/css',
}

/** Run all scripts. */
const AllInOne = (cb, input, output) => {
    return src(dist.files)
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(concat('all.css'))
        .pipe(dest(dist.outputFolder));
};

const AllInOneIconbar = (cb, input, output) => {
    return src(dist.iconbarAll)
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(concat('iconbar-w-tooltip.css'))
        .pipe(dest(dist.outputFolder));
};

const AllInOneSidebar = (cb, input, output) => {
    return src(dist.sidebarAll)
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(concat('sidebar-w-search.css'))
        .pipe(dest(dist.outputFolder));
};

const Independent = (cb, input, output) => {
    return src(dist.files)
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(dest(dist.outputFolder));
};

const CssThemes = (cb, input, output) => {
    return src(dist.themes)
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(dest(dist.outputFolder + '/themes'));
};


/** Put a watch on all files. */
exports.watch = CSSwatch = cb => {
    return watch(dist.files)
        .on('change', path => {
            console.log('Change detected to .scss file "' + path + '"');
            series(Independent, AllInOne, AllInOneIconbar, AllInOneSidebar, CssThemes)(() => {
                console.log('CSS compiled and concatenated.');
            });
    });
};