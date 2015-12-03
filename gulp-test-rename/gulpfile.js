var gulp = require("gulp");
var rename = require("gulp-rename");

var src = {
    text:"./src/text/test.txt"
};
var dest = {
    root:"./dest",
    text:"/text/hello.txt"
};

gulp.task("rename",function(){
    gulp.src(src.text)
        .pipe(rename(dest.text))
        .pipe(gulp.dest(dest.root))
});