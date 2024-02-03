const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {connection} = require("./db");
const {userRouter} = require('./Routes/user.route');
const {bookRouter} = require('./Routes/book.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
app.use('/books', bookRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connnected to db");
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})