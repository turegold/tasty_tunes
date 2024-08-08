const express = require('express');
const path = require('path'); //path 사용
const app = express();
//6-4까지


app.use((req,res, next)=>{
    console.log('모든 요청에 실행하고싶어요');//미들웨어: 모든 라우터에 실행하는 모듈
    next(); //next를 안하면 미들웨어만 실행하고 다음 것을 실행하지 않음
})

app.get('/',(req,res)=>{ //3000번에 접속하면 메세지 전송
    res.sendFile(path.join(__dirname,'./index.html'));//현재 경로 + ./index.html
});

app.post('/',(req,res)=>{ //한 라우터나 미들웨어에 2개 이상의 send 불가능
    res.send('hello express');
});

app.get('/about',(req,res)=>{
    res.send('hello about');
});

app.use((req,res,next)=>{ //없는 라우터 처리 미들웨어(404)
    res.status(200).send('404지롱'); //기본적으론 200을 보냄
})

app.use((err,req,res,next)=>{//에러 미들웨어의 형식은 고정
    console.error(err);
    res.status(200).send('에러났지롱.');
})

app.listen(3000, ()=>{ //3000번 포트에 실행
    console.log('익스프레스 서버 실행');
});