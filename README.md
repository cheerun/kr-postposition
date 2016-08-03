# kr-postposition
Attach suitable postposition with korean word

## attach(word, type)
Return word with proper postposition using type

`word`:

Word that want to attach postposition

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



## example
###CommonJS (node.js)
```javascript
require('kr-postposition').attach('고래', '이랑') // '고래랑'
require('kr-postposition').attach('사랑', '나') // '사랑이나'
```

###Browser
```javascript
// use kr-postposition.js or kr-postposition.min.js in the library directory and 'script' tag
krPostposition.attach('예약', '와') // '예약과'
krPostposition.attach('고양이', '이었다') // '학생이였다'
```
