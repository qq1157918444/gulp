var gulp = require("gulp");
var concat = require("gulp-concat");

var src = {
    js:"./js/*.js"
};

var dest = {
    root:"./dest",
    concatname:"all.js"
};

gulp.task("concat",function(){
    return gulp.src(src.js)
        .pipe(concat(dest.concatname))
        .pipe(gulp.dest(dest.root))
});