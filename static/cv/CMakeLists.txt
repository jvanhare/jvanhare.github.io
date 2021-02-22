cmake_minimum_required(VERSION 2.8.4)

project(CV NONE)

set(PDFLATEX_COMPILER xelatex)

include(UseLATEX.cmake)
find_package(Python3 COMPONENTS Interpreter)

add_custom_target(
  jinja2
  COMMAND ${Python3_EXECUTABLE} ${CMAKE_SOURCE_DIR}/src/cv.py
  WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
  COMMENT "Build CV.tex from Jinja2 template")

add_latex_document(
  src/cv.tex
  INPUTS
  fonts/Fontin.otf
  fonts/Fontin-SmallCaps.otf
  fonts/Fontin-Italic.otf
  fonts/Fontin-Bold.otf
  BIBFILES
  ../../bib/jvanhare.bib
  DEPENDS
  jinja2
  USE_BIBLATEX)
