const express = require("express")
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors")

const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")

const port = process.env.port || 8800

// DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB CONNECTED"))

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTES
app.use("/api/users", userRoute)
app.use("/api/pins", pinRoute)


app.listen(port, () => console.log(`Server is runnning on ${port}`))