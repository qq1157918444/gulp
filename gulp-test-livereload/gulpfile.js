var gulp = require("gulp");
var tinylr = require("tiny-lr");
var server = tinylr();
var port = 35729;
var livereload = require("gulp-livereload");

var src = {
    html:"./page/*.html"
};

var dest = {
    html:"./dest"
};

gulp.task("html",function(){
    gulp.src(src.html)
        .pipe(livereload(server))
        .pipe(gulp.dest(dest.html))
});

gulp.task("watch",function(){
    server.listen(port,function(err){
        if(err){
            return console.log(err);
        }

        gulp.watch(src.html,function(event){
            gulp.run("html")
        });

    });
});