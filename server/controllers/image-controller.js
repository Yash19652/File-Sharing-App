const File = require("../models/file");

uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "error in uploading image to database (in upladImage function in backend)",
        error: error.message,
      });
  }
};

module.exports = uploadImage;
