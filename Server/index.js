const express = require('express');
const cors = require('cors');
const { connectDB } = require('./Database');
const { userRouter } = require('./Routes/user');
const { todoRouter } = require('./Routes/todo');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(todoRouter)

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
}
);

connectDB().then(()=>{
    app.listen(8080, ()=>{
        console.log('Server started on port 8080');
    })
});

