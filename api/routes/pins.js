const Pin = require("../models/Pin");
const router = require("express").Router();

// CREATE PIN
router.post("/", async (req, res) => {
  try {
    const pin = await Pin.create(req.body);
    res.status(200).json(pin);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PINS
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find({});
    res.status(200).json(pins);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;