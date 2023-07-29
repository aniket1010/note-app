const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContatct,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contatctController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContacts).post(createContatct);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
