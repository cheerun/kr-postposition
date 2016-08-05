'use strict';

(function (exports) {
  var DEFAULT_SYMBOL = {
    open: '{',
    close: '}'
  };

  var symbol = {
    open: DEFAULT_SYMBOL.open,
    close: DEFAULT_SYMBOL.close
  };

  /**
   * merge(word: any, type: string): string
   * @param word
   * @param type
   * @returns string
   */
  exports.merge = function () {
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

  /**
   * parse(sentence: any): string
   * @param sentence
   * @returns string
   */
  exports.parse = function (sentence) {
    var parseRegExp = new RegExp('(.)' + symbol.open + '([^' + symbol.close + '.]*)' + symbol.close, 'gm');

    var result = sentence;
    var matches = void 0;
    while (matches = parseRegExp.exec(result)) {
      var target = matches[0];
      var word = matches[1];
      var type = matches[2];
      var mergedWord = exports.merge(word, type);
      result = result.replace(target, mergedWord);
    }
    return result;
  };

  exports.getSymbol = function () {
    return symbol;
  };
  exports.setSymbol = function (openSymbol, closeSymbol) {
    exports.setOpenSymbol(openSymbol);
    exports.setCloseSymbol(closeSymbol);
  };
  exports.setOpenSymbol = function () {
    var openSymbol = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_SYMBOL.open : arguments[0];

    symbol.open = '\\' + openSymbol;
  };
  exports.setCloseSymbol = function () {
    var closeSymbol = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_SYMBOL.close : arguments[0];

    symbol.close = '\\' + closeSymbol;
  };

  /**
   * attach(word: any, type: string): string
   * @deprecated - changed to merge(). Use merge() because it will be removed on v3.0.0
   */
  exports.attach = exports.merge;

  var getPostposition = function getPostposition(type, hasJongjang) {
    var koreanYiCode = 0xC774; // 이
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
