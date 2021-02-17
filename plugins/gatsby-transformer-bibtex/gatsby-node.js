"use strict";

var _url = require("url");

var _bibtex = require("bibtex");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getRaw(allContent, key) {
  var openbib = /@\s*\w+\s*{(.+),/gm;
  var groups = null;

  while ((groups = openbib.exec(allContent)) !== null) {
    if (groups[1].trim().toLowerCase() !== key.trim().toLowerCase()) {
      continue;
    } else {
      var startIndex = openbib.lastIndex - groups[0].length;
      var index = openbib.lastIndex;
      var escaped = false;
      var stack = 0;

      while (index < allContent.length) {
        switch (allContent.charAt(index)) {
          case '{':
            if (escaped) {
              escaped = false;
              break;
            }

            ;
            escaped = false;
            stack = stack + 1;
            break;

          case '}':
            if (escaped) {
              escaped = false;
              break;
            }

            ;
            escaped = false;

            if (stack === 0) {
              return allContent.substring(startIndex, index + 1);
            } else {
              stack = stack - 1;
            }

            ;
            break;

          case '\\':
            escaped = true;
            break;

          default:
            escaped = false;
            break;
        }

        index = index + 1;
      }
    }
  }

  return null;
}

String.prototype.replaceAll = function (search, replacement) {
  return this.replace(new RegExp(search, 'g'), replacement);
};

function getYoutubeId(ytstring) {
  if (ytstring) {
    var is_link = ytstring.includes("youtube.com");
    var id = null;

    if (is_link) {
      var url = new _url.URL(ytstring);
      id = url.searchParams.get('v');
    } else {
      id = ytstring;
    }

    return id;
  } else {
    return null;
  }
}

function cleanAccents(str) {
  return str.replaceAll("\\\\'e", "é").replaceAll("\\\\ss", "ß").replaceAll("\\\\\"A", "Ä").replaceAll("\\\\\"a", "ä").replaceAll("\\\\\"E", "Ë").replaceAll("\\\\\"e", "ë").replaceAll("\\\\\"O", "Ö").replaceAll("\\\\\"o", "ö").replaceAll("\\\\\"U", "Ü").replaceAll("\\\\\"u", "ü").replaceAll("\\\\\~A", "Ã").replaceAll("\\\\\~a", "ã").replaceAll("\\\\'c", "ć").replaceAll("\\\\cc", "ç").replaceAll("\\\\'E", "É").replaceAll(",", " ");
}

function jsonOfEntry(entry) {
  var authors = _lodash["default"].map(entry.getAuthors().authors$, function (auth, _) {
    return auth.firstNames + " " + auth.lastNames;
  }).map(cleanAccents).map(function (x) {
    return x.trim();
  });

  var date = (entry.getFieldAsString('issue_date') ? entry.getFieldAsString('issue_date') : entry.getFieldAsString('year')).toString();
  var school = entry.getFieldAsString('school') ? cleanAccents(entry.getFieldAsString('school')) : '';
  var youtubeId = entry.getFieldAsString('youtubeId') ? entry.getFieldAsString('youtubeId') : getYoutubeId(entry.getFieldAsString('youtube'));
  var entry_type = entry.type;
  var ret = {};
  Object.keys(entry.fields).forEach(function (k) {
    ret[k] = entry.getFieldAsString(k);
  });
  return _objectSpread(_objectSpread({}, ret), {}, {
    authors: authors,
    date: date,
    school: school,
    youtubeId: youtubeId,
    entry_type: entry_type
  });
}

function onCreateNode(_x) {
  return _onCreateNode.apply(this, arguments);
}

function _onCreateNode() {
  _onCreateNode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var node, actions, loadNodeContent, createNodeId, createContentDigest, createNode, createParentChildLink, content, bib, keys, onlyFieldsWithKey, bibArray;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            node = _ref.node, actions = _ref.actions, loadNodeContent = _ref.loadNodeContent, createNodeId = _ref.createNodeId, createContentDigest = _ref.createContentDigest;
            createNode = actions.createNode, createParentChildLink = actions.createParentChildLink;

            if (!(node.extension !== "bib")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            ; // Load CSV contents

            _context.next = 7;
            return loadNodeContent(node);

          case 7:
            content = _context.sent;
            // Parse
            bib = (0, _bibtex.parseBibFile)(content);
            keys = Object.keys(bib.entries$);
            onlyFieldsWithKey = _lodash["default"].map(keys, function (key) {
              var obj = jsonOfEntry(bib.getEntry(key));
              obj.key = key;
              return obj;
            });

            if (_lodash["default"].isArray(onlyFieldsWithKey)) {
              bibArray = onlyFieldsWithKey.map(function (ref) {
                return _objectSpread(_objectSpread({}, ref), {}, {
                  raw: getRaw(content, ref.key),
                  id: createNodeId("".concat(node.id, " ").concat(ref.key, " >>> BIBTEX")),
                  children: [],
                  parent: node.id,
                  internal: {
                    contentDigest: createContentDigest(ref),
                    type: _lodash["default"].upperFirst(_lodash["default"].camelCase("Reference"))
                  }
                });
              });

              _lodash["default"].each(bibArray, function (y) {
                createNode(y);
                createParentChildLink({
                  parent: node,
                  child: y
                });
              });
            }

            return _context.abrupt("return");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _onCreateNode.apply(this, arguments);
}

exports.onCreateNode = onCreateNode;