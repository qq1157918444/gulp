var gulp = require("gulp"),//基础库
    rev = require("gulp-rev"),
    notify = require("gulp-notify");

/*源文件目录*/
var src = {
    css:"./src/static/css/*.css"
};

/*处理后的文件目录*/
var dest = {
    css:"./dest/static/css"
};

/*处理*/
gulp.task("default",function(){
    return gulp.src(src.css)
        .pipe(rev())
        .pipe(gulp.dest(dest.css))
        .pipe(notify({message:"html task finish"}));
});