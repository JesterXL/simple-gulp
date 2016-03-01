"use strict";

var gulp     = require('gulp');
var Bluebird = require('bluebird');

gulp.task('promiseIt', (done)=>
{
	Promise.resolve(1).then(function()
	{
		console.log("Bluebird Promise done.");
		done();
	});
});

gulp.task('default', ['promiseIt']);