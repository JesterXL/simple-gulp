"use strict";

var gulp                = require('gulp');

gulp.task('hello', ()=>
{
	console.log("Hey, what's up!");
});

gulp.task('default', ['hello']);