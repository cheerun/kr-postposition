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
      case '이야':
        return hasJongjang ? '이야' : '야';
      case '이랑':
      case '랑':
        return hasJongjang ? '이랑' : '랑';
      case '이나':
      case '나':
        return hasJongjang ? '이나' : '나';
      case '이라도':
      case '라도':
        return hasJongjang ? '이라도' : '라도';
      case '이나마':
      case '나마':
        return hasJongjang ? '이나마' : '나마';
      case '은커녕':
      case '는커녕':
        return hasJongjang ? '은커녕' : '는커녕';
      default:
        return '';
    }
  };

  var isUndefined = function isUndefined(variable) {
    return typeof variable === 'undefined';
  };
})(typeof exports === 'undefined' ? window['krPostposition'] = {} : exports);
//# sourceMappingURL=kr-postposition.js.map
