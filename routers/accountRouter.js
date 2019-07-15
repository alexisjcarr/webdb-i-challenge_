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

router.post("/", async (req, res) => {
  const { name, budget } = req.body;
  if (!name || !budget) {
    res.send(400).json({
      error: "Please include name and budget in your request."
    });
  } else {
    try {
      const newAcct = await db("accounts").insert(req.body);
      res.status(201).json(newAcct[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

module.exports = router;
