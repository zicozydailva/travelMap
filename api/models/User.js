const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        minlength: 3,
        maxlength: 40
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password field is required"],
        maxlength: 40
    }
})

userSchema.pre("save", async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(userPass) {
    const isMatch = await bcrypt.compare(userPass, this.password)
    return isMatch;
}

module.exports = mongoose.model("User", userSchema)