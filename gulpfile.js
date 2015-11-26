// includeing plugins
var gulp = require('gulp'),
	minifyHtml = require('gulp-minify-html'),
	mififyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	replace = require('gulp-replace');

// task
gulp.task('default', ['minify-html', 'minify-css', 'minify-js'], function(){
	console.log('default');
	//gulp.src('src/templates/layout.src.tpl')
	//gulp.src('src/course_of_bible.html')
		//.pipe(usemin({
		//	assetDir: 'public',
		//	css: [minifyCss(), 'concat'],
		//	js: [uglify(), 'concat']
		//}))
		//.pipe(gulp.dest('public'));
});

//gulp.task('scripts', function(){
//	gulp.src([])
//		.pipe(concat('myproject.js'))
//		.pipe(uglify())
//		.pipe(rename({suffix: '.min'})
//		.pipe(header('/*! <%= pkg.name %> <%= pkg.version %> */\n', {pkg: pkg}))
//		.pipe(gulp.dest('./public/js/'));
//
//});

gulp.task('styles', function(){
	gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.css',
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/bootstrap/dist/css/bootstrap-theme.css',
		'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
	])
	.pipe(gulp.dest('public/css'));

	gulp.src([
		'src/css/profile.css',
		'src/css/foo.css',
		'src/css/style.css',
	])
	.pipe(replace('img/', 'jpg/'))
	.pipe(gulp.dest('public/css'));


});

gulp.task('scripts', function(){
	gulp.src([
		'bower_components/angular/angular.js'
	])
	.pipe(gulp.dest('public/js'));

	gulp.src([
		'src/controllers/profile_controller.js',
		'src/controllers/controllers.js'
	])
	.pipe(gulp.dest('public/controllers'));
});

gulp.task('asset', function(){
	gulp.src([
		'src/data/*'
	])
	.pipe(gulp.dest('public/data'));
});

gulp.task('fix-paths', function(){
	//gulp.src('public/css/site.css')
	gulp.src([
		'src/course_of_bible.html',
		'src/bazzar.html',
	])
	.pipe(replace('../bower_components/bootstrap/dist/', ''))
	.pipe(gulp.dest('public'));

	gulp.src([
		'src/index.html',
		'src/pentecoste.html',
		'src/news.html',
		'src/about-us.html',
		'src/decoration.html',
		'src/redemptoris.html',
		'src/data/decoration.json'
	])
	.pipe(replace('../bower_components/bootstrap/dist/', ''))
	.pipe(replace('../bower_components/angular/', 'js/'))
	.pipe(replace('../bower_components/jquery/dist/', 'js/'))
	.pipe(replace('img/', 'jpg/'))
	.pipe(gulp.dest('public'));

	gulp.src([
		'src/data/decoration.json'
	])
	.pipe(replace('img/', 'jpg/'))
	.pipe(gulp.dest('public/data'));
});

gulp.task('minify-html', function(){
	console.log('minify-html');
	//gulp.src('./Html/*.html')
	//	.pipe(minifyHtml())
	//	.pipe(gulp.dest('path/to/destination'));
});

gulp.task('minify-css', function(){
	console.log('minify-css');
	//gulp.src('./Css/one.css')
	//	.pipe(minifyCss())
	//	.pipe(gulp.dest('path/to/destination'));
});

gulp.task('minify-js', function(){
	console.log('minify-js');
	//gulp.src('./JavaScript/*.js')
	//	.pipe(uglify())
	//	.pipe(gulp.dest('path/to/destination'));
});

gulp.task('jsLint', function (){
	console.log('jsLint');
	//gulp.src('./JavaScript/*.js')
	//	.pipe(jshint())
	//	.pipe(jshint.reporter());
});

