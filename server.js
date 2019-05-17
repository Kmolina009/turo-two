const express = require('express');
const port = 3000;
const app = express();
const indexRouter = require('./routes/index');
const path = require('path');
require("./config/database");



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRouter);




app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})