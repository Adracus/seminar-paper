pdf:
	pdflatex seminarpaper.tex && bibtex seminarpaper.aux && pdflatex seminarpaper.tex && pdflatex seminarpaper.tex
