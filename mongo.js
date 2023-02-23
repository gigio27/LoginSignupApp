const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://giorgiobonan:admin@cluster0.o8t6gcr.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));



const newSchema = new mongoose.Schema({
    email: {
        type: String,
    required: true
    },
    password: {
        type: String,
        required: true
    },
})

const collection = mongoose.model("collection", newSchema);

module.exports = collection;