var gulp = require("gulp");
var clean = require("gulp-clean");

var src = {
    js:"./js/*.js"
};

var dest = {
    root:"./dest",
    js:"./dest/*.js"
};

gulp.task("clean-script",function(){
    return gulp.src(dest.js,{read:false})
        .pipe(clean())
});

gulp.task("script",["clean-script"],function(){
    return gulp.src(src.js)
        .pipe(gulp.dest(dest.root))
});

gulp.task("default",["script"]);