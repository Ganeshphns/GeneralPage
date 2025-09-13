const { v2: cloudinary } = require('cloudinary');
const multer = require('multer');

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer in-memory storage (keeps file in RAM for direct upload)
const storage = multer.memoryStorage();

// Upload helper – accepts a file buffer or data URI
async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto', // auto-detects image/video/etc.
  });
  return result;
}

// Multer middleware to handle single/multiple file uploads
const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
