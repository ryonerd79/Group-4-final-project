// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const PostSchema = new Schema({
//     postText: {
//       type: String,
//       required: 'You need to type a post!',
//       minlength: 1,
//       maxlength: 280,
//       trim: true,
//     },
//     postAuthor: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (timestamp) => dateFormat(timestamp),
//     },
//     comments: [
//       {
//         commentText: {
//           type: String,
//           required: true,
//           minlength: 1,
//           maxlength: 280,
//         },
//         commentAuthor: {
//           type: String,
//           required: true,
//         },
//         createdAt: {
//           type: Date,
//           default: Date.now,
//           get: (timestamp) => dateFormat(timestamp),
//         },
//       },
//     ],
//   });
  
//   const Post = model('Post', PostSchema);
  
//   module.exports = Post;

//This Post.js under models is intended to be used to help with the rendering of Posts between Parents and Teachers one on one.