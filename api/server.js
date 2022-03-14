const express = require("express")
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors")

const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")

const PORT = process.env.PORT || 8800

// DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB CONNECTED"))

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTES
app.use("/api/users", userRoute)
app.use("/api/pins", pinRoute)

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(PORT, () => console.log(`Server is runnning on ${PORT}`))