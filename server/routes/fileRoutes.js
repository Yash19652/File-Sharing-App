const express = require("express");
const uploadImage = require('./../controllers/image-controller');
const router = express.Router()
const upload = require("../utils/upload")

router.post('/upload',upload.single('file'),uploadImage) // '/upload' in frontend in axios

module.exports = router;