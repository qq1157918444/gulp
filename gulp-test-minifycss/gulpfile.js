var gulp = require("gulp");
var minifycss = require("gulp-minify-css");

var src = {
    css:"css/*.css"
};

var dest = {
    css:"dest/css"
};

gulp.task("minify-css",function(){
    return gulp.src(src.css)
        .pipe(minifycss())
        .pipe(gulp.dest(dest.css))
});