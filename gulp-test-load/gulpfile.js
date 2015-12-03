var gulp = require("gulp"),//基础库
    gulpLoadPlugins = require("gulp-load-plugins"),
    plugins = gulpLoadPlugins();

/*源文件目录*/
var src = {
    js:"./src/static/js/*.js"
};

/*处理后的文件目录*/
var dest = {
    root:"./dest",
    js:"./dest/static/js"
};

/*合并后文件的命名*/
var concat_name = {
    js:"main.js"
};

/*js处理*/
gulp.task("js",function(){
    gulp.src(src.js)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat(concat_name.js))
        .pipe(gulp.dest(dest.js))
        .pipe(plugins.rename({suffix:'.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest.js))
        .pipe(plugins.notify({message:"js task finish"}));
});

/*清空js*/
gulp.task("clean",function(){
    gulp.src([dest.js],{read:false})
        .pipe(plugins.clean());
});

/*默认任务，清空js并重建，运行语句： gulp*/
gulp.task("default",["clean"],function(){
    gulp.start("js");
});

/*监听任务，运行语句： gulp watch*/
gulp.task("watch",function(err){
    if(err){
        console.log(err)
    }
    /*监听js*/
    gulp.watch(src.js,function(event){
        gulp.run("js");
    });

    var server = plugins.livereload();
    gulp.watch([dest.root]).on("change",function(file){
        //server.changed(file.path);
        server.changed;
    });
});