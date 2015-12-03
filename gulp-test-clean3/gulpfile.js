var gulp = require("gulp");
var clean = require("gulp-clean");

var src = {
    js:"./js/*.js"
};

var dest = {
    root:"./dest"
};

gulp.task("clean",function(){
    return gulp.src(src.js)
        .pipe(clean({force:true}))
        .pipe(gulp.dest(dest.root))
});