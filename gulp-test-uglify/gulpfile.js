var gulp = require("gulp");
var uglify = require("gulp-uglify");

var src = {
    js:"js/*.js"
};

var dest = {
    root:"./dest"
};

gulp.task("uglify",function(){
    return gulp.src(src.js)
        .pipe(uglify())
        .pipe(gulp.dest(dest.root))
});