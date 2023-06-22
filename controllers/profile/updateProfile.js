const multer = require("multer");
const path = require("path");
const validateProfile = require("../../validates/validateProfile");
const sharp = require("sharp");
const upload = multer({ dest: path.join(__dirname, "../../temp") });
module.exports = [
  upload.single("avatar"),
  validateProfile,
  async (req, res) => {
    if (req.file) {
      const avatarUrl = `/public/avatars/${req.user._id}.jpg`;
      const avatarPath = path.join(__dirname, `../..${avatarUrl}`);
      await sharp(req.file.path)
        .resize(150, 150)
        .jpeg({
          quality: 70,
        })
        .toFile(avatarPath);
      req.avatar = avatarUrl;
    }
    req.user.displayName = req.body.displayName;
    req.user.birthDate = req.body.birthDate;
    req.user.gender = req.body.gender;
    await req.user.save();
    req.flash("success", "Update Profile Success");
    res.redirect("/profile/edit");
  },
];
