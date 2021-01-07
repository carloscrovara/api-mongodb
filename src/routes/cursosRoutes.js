const express = require('express');
const router = express.Router();


const{ index, test } = require("../controllers/cursosController");

router.get("/", index);
router.get("/test", test);

module.exports = router;