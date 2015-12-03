var gulp = require("gulp");
var jshint = require("gulp-jshint");

var src = {
    script:"js/*.js"
};

gulp.task("script",function(){
    return gulp.src(src.script)
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});