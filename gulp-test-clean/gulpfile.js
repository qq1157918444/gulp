var gulp = require("gulp");
var concat = require("gulp-concat");
var clean = require("gulp-clean");

var src = {
    js:"./js/*.js"
};

var dest = {
    root:"./dest",
    concatname:"all.js"
};

gulp.task("clean",function(){
    return gulp.src(src.js)
        .pipe(concat(dest.concatname))
        .pipe(gulp.dest(dest.root))
        .pipe(clean())
        .pipe(gulp.dest(dest.root))
});