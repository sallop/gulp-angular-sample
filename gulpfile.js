// includeing plugins
var gulp = require('gulp'),
	minifyHtml = require('gulp-minify-html'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	replace = require('gulp-replace'),
	jshint = require('gulp-jshint'),
	sourcemaps = require('gulp-sourcemaps'),
	less = require('gulp-less'),
	path = require('path'),
	browserSync = require('browser-sync').create();

var sources = {
	less: [
		'src/less/*.less'
	],
	css : [
		//'src/css/profile.css',
		//'src/css/foo.css',
		//'src/css/style.css'
		'src/css/*.css'
	],
	script: [
		'src/js/*.js'
	],
	html: [
		'src/*.html'
	],
	vendor_css: [
		//'bower_components/bootstrap/dist/css/bootstrap.css',
		//'bower_components/bootstrap/dist/css/bootstrap.min.css',
		//'bower_components/bootstrap/dist/css/bootstrap-theme.css',
		//'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
		'bower_components/bootstrap/dist/css/*.css'
	],
	vendor_script: [
		'bower_components/jquery/dist/jquery.js',
		'bower_components/angular/angular.js',
		'bower_components/bootstrap/dist/js/*'
	],
	fix_paths: [
		'../bower_components/bootstrap/dist/',
		'../bower_components/angular/',
		'../bower_components/jquery/dist/'
	],
	controller: [
		'src/controllers/controllers.js',
		'src/controllers/profile_controller.js'
	],
	asset: [
		'src/data/*.json'
	]
};

// task
//gulp.task('default', ['minify-html', 'minify-css', 'minify-js'], function(){
//gulp.task('default', ['styles', 'scripts', 'asset'], function(){
gulp.task('default', function(){
	console.log('default');
	// gulp.watch();
	//gulp.src('src/templates/layout.src.tpl')
	gulp.src('src/course_of_bible.html')
		.pipe(usemin({
			assetDir: 'public',
			css: [minifyCss(), 'concat'],
			js: [uglify(), 'concat']
		}))
		.pipe(gulp.dest('public'));
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
	//gulp.src([ 'bower_components/bootstrap/dist/css/bootstrap.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css' ])
	gulp.src(sources.vendor_css)
		.pipe(gulp.dest('public/css'));

	//gulp.src([ 'src/css/profile.css', 'src/css/foo.css', 'src/css/style.css' ])
	gulp.src(sources.css)
		.pipe(replace('img/', 'jpg/'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function(){
	//gulp.src([ 'bower_components/angular/angular.js' ])
	gulp.src(sources.vendor_script)
		.pipe(gulp.dest('public/js'));

	//gulp.src([ 'src/controllers/profile_controller.js', 'src/controllers/controllers.js' ])
	gulp.src(sources.controller)
		.pipe(gulp.dest('public/controllers'));
});

gulp.task('asset', function(){
	//gulp.src([ 'src/data/*' ])
	gulp.src(sources.asset)
		.pipe(replace('img/', 'jpg/'))
		.pipe(gulp.dest('public/data'));
});

gulp.task('fix-paths', function(){
	gulp.src(sources.html)
		.pipe(replace('../bower_components/bootstrap/dist/', ''))
		.pipe(replace('../bower_components/angular/', 'js/'))
		.pipe(replace('../bower_components/jquery/dist/', 'js/'))
		.pipe(replace('img/', 'jpg/'))
		.pipe(gulp.dest('public'));
});

gulp.task('minify-html', function(){
	gulp.src(sources.html)
		.pipe(minifyHtml())
		.pipe(gulp.dest('public'));
});

gulp.task('minify-css', function(){
	gulp.src(sources.css)
		.pipe(minifyCss())
		.pipe(gulp.dest('public/css'));
});

gulp.task('minify-js', function(){
	//gulp.src('src/js/*.js')
	gulp.src(sources.script)
		.pipe(uglify())
		.pipe(gulp.dest('pulibc/js'));
});

// scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
gulp.task('jshint', function(){
	gulp.src(sources.controller)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function(){
	//gulp.watch('src/js/*.js', ['jshint']);
	//gulp.watch('src/css/*.css', ['build-css']);
	//gulp.watch('src/*.html', ['gulp-minify-html']);
	gulp.watch(sources.script, ['jshint']);
	gulp.watch(sources.controller, ['jshint']);
	gulp.watch(sources.css, ['build-css']);
	gulp.watch(sources.html, ['gulp-minify-html']);
});

/* jshint task would be here */
gulp.task('build-css', function(){
	//gulp.src('src/css/*.css')
	gulp.src(sources.css)
		.pipe(sourcemaps.init()) // process the original sources
		.pipe(less())
		.pipe(sourcemaps.write()) // add the map to modified source.
		.pipe(gulp.dest('public/css'));
});

gulp.task('build-js', function(){
	//gulp.src('src/js/*.js')
	gulp.src(sources.script)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		// only uglify if gulp is ran with '--type production'
		.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js'));
});

//http://www.browsersync.io/docs/gulp/
// Static Server
gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
		// proxy: "yourlocal.dev"
	});
});

gulp.task('less', function(){
	//return gulp.src('./less/**/*.less')
	gulp.src(sources.less)
		.pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/css'));
});

