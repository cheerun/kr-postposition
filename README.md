# kr-postposition
For suitable postposition on korean word

## merge(word, type)
Merge and return word with proper postposition according to type.  
(attach() was deprecated. It will be removed on next major update) 

`word`:
The word you want to attach postposition

`type`:
Below one of postposition strings for reference

```javascript
'을' || '를'
'이' || '가'
'은' || '는'
'과' || '와'
'아' || '야'
'이어' || '여'
'이었' || '였'
'으로' || '로'
'은커녕' || '는커녕'
```

or Custom string for example '(이) + *'

```javascript
// for example
'이야'  // Exception: If you want to distinguish '이야/야', you must use only '이야' because of duplication with '아/야'
'이랑' || '랑'
'이나' || '나'
'이라도' || '라도'
'이나마' || '나마'
...
```

### example:CommonJS (node.js)
```javascript
require('kr-postposition').attach('고래', '이랑') // '고래랑'
require('kr-postposition').attach('사랑', '나') // '사랑이나'
```

### example:Browser
```javascript
// use kr-postposition.js or kr-postposition.min.js in the library directory and 'script' tag
krPostposition.attach('예약', '와') // '예약과'
krPostposition.attach('고양이', '이었다') // '고양이였다'
```


## parse(sentence)
Parse postposition with open-closed symbols to merged words in the whole sentence.  
(Default open symbol is '{', and close symbol is '}')

`sentence`:
The sentence you want to parse that has postposition with open-closed symbols

### example:CommonJS (node.js)
```javascript
require('kr-postposition').parse('나{은} 너{을} 사랑해') // 나는 너를 사랑해
```

### example:Browser
```javascript
krPostposition.parse('돌고래{은} 이마의 구멍{로} 숨{를} 쉬는 것{여}서, 종종 물 밖{로} 나와야 한다.') // 돌고래는 이마의 구멍으로 숨을 쉬는 것이어서, 종종 물 밖으로 나와야 한다.
```

## getSymbol()
Get open and close symbol

## setSymbol(openSymbol, closeSymbol)
## setOpenSymbol(openSymbol)
## setCloseSymbol(closeSymbol)
Set new open, or closed, or open and closed symbol.  
If parameter is empty, Symbol is set to default symbols '{' and '}'
