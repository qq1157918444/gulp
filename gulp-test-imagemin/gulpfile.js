var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");

var src = {
    image:"images/*"
};

var dest = {
    image:"./dest/images"
};

gulp.task("imagemin",function(){
    return gulp.src(src.image)
        .pipe(imagemin({
            progressive:true,
            svgoPlugins:[{removeViewBox:false}],
            use:[pngquant()]
        }))
        .pipe(gulp.dest(dest.image))
});