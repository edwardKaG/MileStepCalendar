require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(cors());

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty1234@cluster0.dtce9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`) // this link should be in .env
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();