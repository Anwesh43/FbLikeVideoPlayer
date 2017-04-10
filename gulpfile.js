const browserify = require('browserify')
const fs = require('fs')
const gulp = require('gulp')
gulp.task('compile-es6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(fs.createWriteStream('public/bundle.js'))
})
