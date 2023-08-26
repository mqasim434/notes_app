const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://mq30003:notes123@notes.hb13pgq.mongodb.net/?retryWrites=true&w=majority");
        console.log(`Database is connected to host ${conn.connection.host}`);        
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;