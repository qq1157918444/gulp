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
    browsersync = require("browser-sync"),
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
    root:"./dest/**",
    browserroot:"./dest",
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
    return gulp.src(src.html)
        .pipe(gulp.dest(dest.html))
        .pipe(notify({message:"html task finish"}));
});

/*css处理*/
gulp.task("css",function(){
    return gulp.src(src.css)
        .pipe(sass().on('error',sass.logError))
        //.pipe(rubysass({style:'expanded'}))
        .pipe(gulp.dest(dest.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(dest.css))
        .pipe(notify({message:"css task finish"}));
});

/*img处理*/
gulp.task("img",function(){
    return gulp.src(src.img)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(dest.img))
        .pipe(notify({message:"img task finish"}));
});

/*js处理*/
gulp.task("js",function(){
    return gulp.src(src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(concat_name.js))
        .pipe(gulp.dest(dest.js))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(dest.js))
        .pipe(notify({message:"js task finish"}));
});

/*清空样式、js、图片、html*/
gulp.task("clean",function(){
    return gulp.src([dest.html,dest.css,dest.js,dest.img],{read:false})
        .pipe(clean());
});

/*默认任务，清空样式、js、图片、html并重建，运行语句： gulp*/
gulp.task("default",["clean"],function(){
    gulp.start("html","css","img","js");
});

/*监听任务，运行语句： gulp watch*/
gulp.task("watch",function(){
    /*监听html*/
    gulp.watch(src.html,["html"]);
    /*监听css*/
    gulp.watch(src.css,["css"]);
    /*监听img*/
    gulp.watch(src.img,["img"]);
    /*监听js*/
    gulp.watch(src.js,["js"]);

    var server = livereload();
    gulp.watch([dest.root]).on("change",function(file){
        //server.changed(file.path);
        server.changed;
    });
});

gulp.task("browser-sync",function(){
    browsersync.init([src.html,src.css,src.js,src.img],{
        server:{
            baseDir:dest.browserroot
        }
    })
});