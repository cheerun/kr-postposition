'use strict';

(function (exports) {
  exports.attach = function () {
    var word = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var type = arguments[1];

    if (isUndefined(type)) {
      return word;
    }

    var koreanStartChar = 0xAC00; // '가'
    var koreanLastChar = 0XD7A3; // '힣'
    var jongjangCycle = 28;
    var targetLetter = word.charCodeAt(word.length - 1) - koreanStartChar;

    if (targetLetter < 0 || targetLetter > koreanLastChar - koreanStartChar) {
      return word + getPostposition(type, false);
    }
    if (targetLetter % jongjangCycle === 0) {
      return word + getPostposition(type, false);
    } else {
      return word + getPostposition(type, true);
    }
  };

  var getPostposition = function getPostposition(type, hasJongjang) {
    var koreanYiCode = 0xC774;
    switch (type) {
      case '을':
      case '를':
        return hasJongjang ? '을' : '를';
      case '이':
      case '가':
        return hasJongjang ? '이' : '가';
      case '은':
      case '는':
        return hasJongjang ? '은' : '는';
      case '과':
      case '와':
        return hasJongjang ? '과' : '와';
      case '아':
      case '야':
        return hasJongjang ? '아' : '야';
      case '이어':
      case '여':
        return hasJongjang ? '이어' : '여';
      case '이었':
      case '였':
        return hasJongjang ? '이었' : '였';
      case '으로':
      case '로':
        return hasJongjang ? '으로' : '로';
      case '은커녕':
      case '는커녕':
        return hasJongjang ? '은커녕' : '는커녕';
      default:
        if (type.charCodeAt(0) === koreanYiCode) {
          return hasJongjang ? type : type.substring(1);
        } else {
          return hasJongjang ? '이' + type : type;
        }
    }
  };

  var isUndefined = function isUndefined(variable) {
    return typeof variable === 'undefined';
  };
})(typeof exports === 'undefined' ? window['krPostposition'] = {} : exports);
//# sourceMappingURL=kr-postposition.js.map
