var gulp = require("gulp");
var clean = require("gulp-clean");

var src = {
    js:"./js/*.js"
};

var dest = {
    root:"./dest",
    concatname:"all.js"
};

gulp.task("clean",function(){
    return gulp.src(src.js,{read:false})
        .pipe(clean())
});