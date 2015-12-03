var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");

var src = {
    html:"./page/test.html"
};

var dest = {
    html:"./dest/page"
};

gulp.task("htmlmin",function(){
    return gulp.src(src.html)
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest(dest.html));
});