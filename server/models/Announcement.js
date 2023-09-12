const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const AnnouncementSchema = new Schema({
  announcementText: {
    type: String,
    required: 'You need to post an announcement!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  announcementAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Announcement = model('Announcement', AnnouncementSchema);

module.exports = Announcement;
