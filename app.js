const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(8000, () => {
    console.log('Listening to port: 8000');
})