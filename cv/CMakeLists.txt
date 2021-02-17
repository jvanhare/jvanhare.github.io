cmake_minimum_required(VERSION 2.8.4)
project(CV NONE)
set(PDFLATEX_COMPILER xelatex)
include(UseLATEX.cmake)
add_latex_document(src/cv.tex
                   INPUTS
                   fonts/Fontin.otf
                   fonts/Fontin-SmallCaps.otf
                   fonts/Fontin-Italic.otf
                   fonts/Fontin-Bold.otf
                   src/custom.bbx
                   BIBFILES
                   src/biblio.bib
                   USE_BIBLATEX)
