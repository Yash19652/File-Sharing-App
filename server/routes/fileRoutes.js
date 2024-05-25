const express = require("express");
const uploadImage = require('./../controllers/image-controller');
const router = express.Router()

router.post('/upload',uploadImage) // /upload in frontend in axios

module.exports = router;