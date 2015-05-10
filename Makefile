pdf:
	pdflatex seminarpaper.tex && makeindex seminarpaper.nlo -s nomencl.ist -o seminarpaper.nls && bibtex seminarpaper.aux && pdflatex seminarpaper.tex && pdflatex seminarpaper.tex
