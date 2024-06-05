const mongoose = require('mongoose'); 
mongoose.connect("mongodb://localhost:27017/bookstore")

.then(() => {

    console.log('MongoDB Connnected...')

}).catch((err) => {
    
    console.log('Error while Mongo Conn..', err);
})
