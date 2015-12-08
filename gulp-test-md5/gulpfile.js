var gulp = require("gulp"),//基础库
    rev = require("gulp-rev"),
    revCollector = require("gulp-rev-collector"),
    minifycss = require("gulp-minify-css"),
    concat = require("gulp-concat");

/*css处理*/
gulp.task("concat",function(){
    return gulp.src([",/css/a.css","./css/b.css"])
        .pipe(concat("wap.min.css"))//合并
        .pipe(minifycss())//压缩
        .pipe(rev())//文件名加md5
        .pipe(gulp.dest("./css"))//输出文件到c指定目录
        .pipe(rev.manifest())//生成json文件
        .pipe(gulp.dest("./rev"));//将json文件保存到rev文件夹里
});

/*rev处理*/
gulp.task("rev",function(){
    return gulp.src(["./rev/*.json","./html/index.html"])//读取json文件以及要替换的html文件
        .pipe(revCollector({
            replaceReved: true
        }))//执行文件内css文件名的替换
        .pipe(gulp.dest("./html/"));//替换后文件输出的目录
});

/*默认任务*/
gulp.task("default",["concat","rev"]);
