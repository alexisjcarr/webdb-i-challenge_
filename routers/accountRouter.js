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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const acct = await db("accounts").where({ id: id });
    res.status(200).json(acct);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
