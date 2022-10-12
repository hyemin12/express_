1. package.json 과 app.js 파일 생성
2. express 설치

```js
// app.js에 import
const express = require("express");
const app = express();

//익스프레스가 지원해주는 restAPI
app.get("/", function (req, res) {
  res.send("Hello World");
});

//app.listen으로 서버 실행이 가능해집니다.
app.listen(3000);
```

3. nodemon 설치 시 수동으로 서버를 껏다 켯다 하지않아도 됨

4. mysql 설치
   https://bebeya.tistory.com/entry/MYSQL-%EB%AC%B4%EB%A3%8C%EB%B2%84%EC%A0%84%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95

5. mysql 연결 ()

5-1. 오류,,,<Br>
postman에서 통신이 잘 이루어지려고 확인하려고 했으나 "ERR_CONNECTION_REFUSED"라는 오류가 떳고, 검색해보니 mysql에 접속이 되지 않았을 때 나타난다 하여, npm run start로 서버를 오픈하고 난 뒤 실행하니 잘 작동함...
<img src="./markdownImg/11123.jpg" />
