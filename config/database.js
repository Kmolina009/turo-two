const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/turo', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Database is connected')
})

