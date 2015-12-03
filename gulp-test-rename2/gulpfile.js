var gulp = require("gulp");
var rename = require("gulp-rename");

var src = {
    text:"./src/**/test.txt"
};
var dest = {
    root:"./dest",
    dirname:"/hello/world",
    basename:"-world",
    extname:".html"
};

gulp.task("rename",function(){
    gulp.src(src.text)
        .pipe(rename(function(path){
            path.dirname += dest.dirname;
            path.basename += dest.basename;
            path.extname =dest.extname
        }))
        .pipe(gulp.dest(dest.root))
});