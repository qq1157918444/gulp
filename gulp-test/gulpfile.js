var gulp = require("gulp"),//基础库
    imagemin = require("gulp-imagemin"),
    rubysass = require("gulp-ruby-sass"),
    sass = require("gulp-sass"),
    minifycss = require("gulp-minify-css"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    clean = require("gulp-clean"),
    notify = require("gulp-notify"),
    cache = require("gulp-cache"),
    tinylr = require("tiny-lr"),
    server = tinylr(),
    port = 35729,
    livereload = require("gulp-livereload");

/*源文件目录*/
var src = {
    html:"./src/page/*.html",
    css:"./src/static/css/*.scss",
    img:"./src/static/img/*",
    js:"./src/static/js/*.js"
};

/*处理后的文件目录*/
var dest = {
    html:"./dest/page/",
    css:"./dest/static/css",
    img:"./dest/static/img/",
    js:"./dest/static/js"
};

/*合并后文件的命名*/
var concat_name = {
    js:"main.js"
};

/*html处理*/
gulp.task("html",function(){
    gulp.src(src.html)
        .pipe(livereload(server))
        .pipe(gulp.dest(dest.html))
        .pipe(notify({message:"html task finish"}));
});

/*css处理*/
gulp.task("css",function(){
    gulp.src(src.css)
        .pipe(sass().on('error',sass.logError))
        //.pipe(rubysass({style:'expanded'}))
        .pipe(gulp.dest(dest.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest(dest.css))
        .pipe(notify({message:"css task finish"}));
});

/*img处理*/
gulp.task("img",function(){
    gulp.src(src.img)
        .pipe(cache(imagemin()))
        .pipe(livereload(server))
        .pipe(gulp.dest(dest.img))
        .pipe(notify({message:"img task finish"}));
});

/*js处理*/
gulp.task("js",function(){
    gulp.src(src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(concat_name.js))
        .pipe(gulp.dest(dest.js))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest(dest.js))
        .pipe(notify({message:"js task finish"}));
});

/*清空样式、js、图片、html*/
gulp.task("clean",function(){
    gulp.src([dest.html,dest.css,dest.js,dest.img],{read:false})
        .pipe(clean());
});

/*默认任务，清空样式、js、图片、html并重建，运行语句： gulp*/
gulp.task("default",["clean"],function(){
    gulp.start("html","css","img","js");
});

/*监听任务，运行语句： gulp watch*/
gulp.task("watch",function(err){
    if(err){
        console.log(err)
    }
    /*监听html*/
    gulp.watch(src.html,function(event){
        gulp.run("html");
    });
    /*监听css*/
    gulp.watch(src.css,function(event){
        gulp.run("css");
    });
    /*监听img*/
    gulp.watch(src.img,function(event){
        gulp.run("img");
    });
    /*监听js*/
    gulp.watch(src.js,function(event){
        gulp.run("js");
    });
});