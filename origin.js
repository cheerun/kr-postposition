((exports) => {
  const DEFAULT_SYMBOL = {
    open: '{',
    close: '}'
  }

  let symbol = {
    open: DEFAULT_SYMBOL.open,
    close: DEFAULT_SYMBOL.close
  }

  /**
   * merge(word: any, type: string): string
   * @param word: 
   * @param type:
   * @returns string
   */
  exports.merge = (word = '', type) => {
    if (isUndefined(type)) {
      return word
    }

    let koreanStartChar = 0xAC00 // '가'
    let koreanLastChar = 0XD7A3 // '힣'
    let jongjangCycle = 28
    let targetLetter = word.charCodeAt(word.length - 1) - koreanStartChar

    if (targetLetter < 0 || targetLetter > (koreanLastChar - koreanStartChar)) {
      return word + getPostposition(type, false)
    }
    if (targetLetter % jongjangCycle === 0) {
      return word + getPostposition(type, false)
    } else {
      return word + getPostposition(type, true)
    }
  }
  
  exports.parse = (sentence) => {
    const parseRegExp = new RegExp(`(.)${symbol.open}([^${symbol.close}.]*)${symbol.close}`, 'gm')

    let result = sentence
    let matches
    while (matches = parseRegExp.exec(result)) {
      let target = matches[0]
      let word = matches[1]
      let type = matches[2]
      let mergedWord = exports.merge(word, type)
      result = result.replace(target, mergedWord)
    }
    return result
  }

  exports.getSymbol = () => symbol
  exports.setSymbol = (openSymbol, closeSymbol) => {
    exports.setOpenSymbol(openSymbol)
    exports.setCloseSymbol(closeSymbol)
  }
  exports.setOpenSymbol = (openSymbol = DEFAULT_SYMBOL.open) => {
    symbol.open = '\\' + openSymbol
  }
  exports.setCloseSymbol = (closeSymbol = DEFAULT_SYMBOL.close) => {
    symbol.close = '\\' + closeSymbol
  }


  /**
   * attach(word: any, type: string): string
   * @deprecated - changed to merge()
   */
  exports.attach = exports.merge

  const getPostposition = (type, hasJongjang) => {
    let koreanYiCode = 0xC774
    switch (type) {
      case '을':
      case '를':
        return hasJongjang ? '을' : '를'
      case '이':
      case '가':
        return hasJongjang ? '이' : '가'
      case '은':
      case '는':
        return hasJongjang ? '은' : '는'
      case '과':
      case '와':
        return hasJongjang ? '과' : '와'
      case '아':
      case '야':
        return hasJongjang ? '아' : '야'
      case '이어':
      case '여':
        return hasJongjang ? '이어' : '여'
      case '이었':
      case '였':
        return hasJongjang ? '이었' : '였'
      case '으로':
      case '로':
        return hasJongjang ? '으로' : '로'
      case '은커녕':
      case '는커녕':
        return hasJongjang ? '은커녕' : '는커녕'
      default:
        if(type.charCodeAt(0) === koreanYiCode) {
          return hasJongjang ? type : type.substring(1)
        } else {
          return hasJongjang ? '이' + type : type
        }
    }
  }

  const isUndefined = variable => typeof variable === 'undefined'
})(typeof exports === 'undefined' ? window[ 'krPostposition' ] = {} : exports);