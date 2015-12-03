var gulp = require("gulp");
var rename = require("gulp-rename");

var src = {
    text:"./src/**/test.txt"
};
var dest = {
    root:"./dest",
    dirname:"/hello/world",
    basename:"-world",
    prefix:"wo-",
    suffix:"-min",
    extname:".html"
};

gulp.task("rename",function(){
    gulp.src(src.text)
        .pipe(rename({
            dirname:dest.dirname,
            basename:dest.basename,
            prefix:dest.prefix,
            suffix:dest.suffix,
            extname:dest.extname
        }))
        .pipe(gulp.dest(dest.root))
});