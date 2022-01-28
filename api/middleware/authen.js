const authUser = (req, res, next) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(401).json("Name, email & password fields are required!!")
    }
    next()
}

module.exports = authUser