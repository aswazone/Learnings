import express from 'express';

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('hello home page');
});
app.get('/about',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.send({message: "hello about page"});
});

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
}); 