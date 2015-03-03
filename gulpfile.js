var gulp		= require("gulp");
var pandoc 		= require("gulp-pandoc");


var paths = {
	md_folder 	: "md/",
	tex_folder 	: "tex/",
	html_folder : "html/",
	md_files 	: "md/**/*.md",
	tex_files	: "tex/**/*.tex",
	html_files 	: "html/**/*.html"
};


gulp.task("tex", function() {
	gulp.src(paths.md_files)
		.pipe(pandoc({
			from: 	"markdown_github",
			to: 	"latex",
			ext: 	".tex",
			args: 	["--smart"]
		}))
		.pipe(gulp.dest(paths.tex_folder));
});

gulp.task("html", function() {
	gulp.src(paths.md_files)
    	.pipe(pandoc({
			from: 'markdown',
			to: 'html5',
			ext: '.html',
			args: ['--smart']
    	}))
    	.pipe(gulp.dest(paths.html_folder));
});

gulp.task("default", ["tex"]);