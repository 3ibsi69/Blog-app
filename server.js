const express=require('express');
const app=express();

const cors=require('cors');
const mongoose=require('mongoose');
app.use(express.json());

const BlogRouter=require('./Routes/BlogRouter');



app.use(cors(
    {
        origin:"*",
    }
));


app.use('/',BlogRouter);






app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}
);
