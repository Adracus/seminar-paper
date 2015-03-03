var gulp		= require("gulp");
var shell 		= require("gulp-shell");
var pandoc 		= require("gulp-pandoc");
var runSequence = require("run-sequence");


var paths = {
	md_folder 	: "md/",
	tex_folder 	: "tex/",
	html_folder : "html/",
	pdf_folder	: "pdf/",
	md_files 	: "md/**/*.md",
	tex_files	: "tex/**/*.tex",
	html_files 	: "html/**/*.html",
	pdf_files 	: "pdf/**/*.pdf"
};


gulp.task("tex", function() {
	return gulp.src(paths.md_files)
		.pipe(pandoc({
			from: 	"markdown_github",
			to: 	"latex",
			ext: 	".tex",
			args: 	["--smart"]
		}))
		.pipe(gulp.dest(paths.tex_folder));
});

gulp.task("html", function() {
	return gulp.src(paths.md_files)
    	.pipe(pandoc({
			from: 	'markdown',
			to: 	'html5',
			ext: 	'.html',
			args: 	['--smart']
    	}))
    	.pipe(gulp.dest(paths.html_folder));
});

gulp.task("pdf", function() {
	return gulp.src(paths.tex_files)
		.pipe(shell(["pandoc <%= file.path %> -o <%= f(file.path) %>"],
			{templateData: {
				f: function(s) {
                    var filename = s.replace(/tex\//, "pdf/").replace(/\.tex/, ".pdf");
                    console.log(filename);
					return filename;
				}
			}}));
		
});

gulp.task("default", function(cb) {
	runSequence("tex", "pdf", cb);
});
