操作流程：

1：安装node

node -v

npm -v

2：安装gulp

npm install gulp -g
npm install gulp --save-dev

3：安装插件

npm install xxx --save-dev

4：新建项目gulp-web

mkdir gulp-web

5：新建生产环境src

cd gulp-web

mkdir src

在src里面进行编码

6：在根目录里面新建gulp配置文件gulpfile.js

在该文件里面require项目构建所需要的插件
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

定义所需要的源文件（生产环境）
定义发布环境
js处理任务
img处理任务
html处理任务
css处理任务
clean处理任务
default处理任务
watch监听处理任务
livereload实时监听任务

7：在跟目录下执行gulp

8：在跟目录下执行gulp watch

9：安装http服务

npm install http-server

10：打开Google浏览器，安装插件livereload，启动该插件

11：进入发布环境执行http-server启动服务

12：打开浏览器输入http://localhost:8080/page/index.html

这个时候浏览器插件livereload和项目服务就有了关联

13：进入生产环境，修改已有文件，gulp会自动执行watch，监听文件的变化，刷新页面，就会看到修改的地方是否生效。

14：如果是新增或者删除文件，watch不会监听到，这个时候需要执行gulp，gulp watch才会生效。