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
          "error in uploading image to database (in uploadImage function in backend)",
        error: error.message,
      });
  }
};

getImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId) //fileId in routes

    file.downloadCount++;
    await file.save();

    res.download(file.path,file.name);
    // res has a function called download to download from an image(media) from given path and given name
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {uploadImage,getImage};
