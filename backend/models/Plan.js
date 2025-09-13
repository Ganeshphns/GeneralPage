const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  speed: {
    type: Number, // Mbps
    required: true
  },
  quota: {
    type: Number, // GB
    required: true
  },
  price: {
    type: Number, // monthly price
    required: true
  },
  validity: {
    type: Number, // days or months
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema);
