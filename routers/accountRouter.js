const db = require("../data/dbConfig");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const accts = await db("accounts");
    res.status(200).json(accts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
