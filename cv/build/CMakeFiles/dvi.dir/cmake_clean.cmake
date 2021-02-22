file(REMOVE_RECURSE
  "cv-blx.bib"
  "cv.aux"
  "cv.bbl"
  "cv.blg"
  "cv.dvi"
  "cv.glg"
  "cv.glo"
  "cv.gls"
  "cv.idx"
  "cv.ilg"
  "cv.ind"
  "cv.ist"
  "cv.lof"
  "cv.log"
  "cv.out"
  "cv.pdf"
  "cv.ps"
  "cv.synctex.bak.gz"
  "cv.synctex.gz"
  "cv.toc"
  "cv.xdy"
  "src/cv.aux"
  "src/cv.tex.aux"
)

# Per-language clean rules from dependency scanning.
foreach(lang )
  include(CMakeFiles/dvi.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
