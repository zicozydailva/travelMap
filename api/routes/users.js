const router = require("express").Router()
const User = require("../models/User");

router.post("/register", async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json(console.log(error))
    }
})

router.post("/login",  async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        !user && res.status(404).json({errorMsg: "User not registered"})

        const isMatch = await user.comparePassword(req.body.password)
        !isMatch && res.status(404).json({errorMsg: "Wrong password"})

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router