const express = require('express');

const app = express();

app.get('/',(req,res)=>{ //3000번에 접속하면 메세지 전송
    res.send('hello express!!');
});

app.post('/',(req,res)=>{
    res.send('hello express');
});

app.get('/about',(req,res)=>{
    res.send('hello about');
});

app.listen(3000, ()=>{ //3000번 포트에 실행
    console.log('익스프레스 서버 실행');
});