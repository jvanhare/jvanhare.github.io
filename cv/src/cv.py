import os
import yaml
import jinja2
import datetime

try:
    from yaml import CLoader as YAMLLoader
    from yaml import CDumper as YAMLDumper
except ImportError:
    from yaml import Loader as YAMLLoader
    from yaml import Dumper as YAMLDumper

def load_yaml(fn):
    with open(fn) as fid:
        cfg = yaml.load(fid, Loader=YAMLLoader)
    return cfg

def date(d):
    return datetime.datetime(*list(map(int,str(d).split('-')))).strftime("%B %d, %Y")

def latex(l):
    return l.replace('<a href="', "\\href{").replace('" target="\_blank">', "}{").replace("</a>", "}").replace("&", "\\&")

def date_month(d):
    return datetime.datetime(*list(map(int,str(d).split('-')))).strftime("%b %Y")

def get_jinja_latex_template(template):
    options = dict()
    options['block_start_string'] = '\BLOCK{'
    options['block_end_string'] = '}'
    options['variable_start_string'] = '\VAR{'
    options['variable_end_string'] = '}'
    options['comment_start_string'] = '\#{'
    options['comment_end_string'] = '}'
    options['line_statement_prefix'] = '%%'
    options['line_comment_prefix'] = '%#'
    options['trim_blocks'] = True
    options['autoescape'] = False
    
    dirname = os.path.dirname(template)
    basename = os.path.basename(template)
    options['loader'] = jinja2.FileSystemLoader(dirname)
    env = jinja2.Environment(**options)
    env.filters['date'] = date
    env.filters['date_month'] = date_month
    env.filters['latex'] = latex

    return env.get_template(basename)
    

with open("src/cv.tex", 'w') as fid:
    fid.write(get_jinja_latex_template("../src/cv.tex").render(load_yaml("../src/cv.yml")))