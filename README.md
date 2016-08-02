# kr-postposition
Attach suitable postposition with korean word

## attach(word, type)
Return word with proper postposition using type

`word`
Word that want to attach postposition

`type`
Below one of postposition strings for reference

```javascript
'을' || '를'
'이' || '가'
'은' || '는'
'과' || '와'
'아' || '야'
'이야'  // If you want to distinguish '이야/야', you must use only '이야' because of duplication with '아/야'
'이랑' || '랑'
'이나' || '나'
'이라도' || '라도'
'이나마' || '나마'
'은커녕' || '는커녕'
```

## example
###CommonJS (node.js)
```javascript
require('kr-postposition').attach('고래', '이랑') // '고래랑'
```

###Browser
```javascript
// use kr-postposition.js or kr-postposition.min.js in the library directory and 'script' tag
krPostposition.attach('예약', '와') // '예약과'
```
