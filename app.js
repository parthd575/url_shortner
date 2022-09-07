const { urlencoded } = require('express');
const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/url_short')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view-engine', 'ejs')
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.m6ug20r.mongodb.net/url_shortner?retryWrites=true&w=majority`,
    (err) => {
        if (err) {
            console.log(err)
        }
        console.log('mongodb atlas connected 😎')
    })

app.use('/home', router)
app.listen(3300, () => {
    console.log('Server running on 3300 ✌')
})