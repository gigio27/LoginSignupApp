const express = require('express');
const collection = require("./mongo")
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.post("/", async(req, res) => {
    const {email, password} = req.body

    try {
        const check= await collection.findOne({email : email})

        if (check) {
            res.json("exist")
        }
        else {
            res.json("not exist")
        }

    }
    catch (err) {
res.json("not exist")    }
})

app.post("/signup", async(req, res) => {
    const {email, password} = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check= await collection.findOne({email : email})

        if (check) {
            res.json("exist")
        }
        else {
            res.json("not exist")
            await collection.insertMany([data])
        }

    }
    catch (err) {
res.json("not exist")    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})