const { AuthenticationError } = require('apollo-server-express');
const { User, Announcement } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('announcements');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('announcements');
    },
    announcements: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Announcement.find(params).sort({ createdAt: -1 });
    },
    announcement: async (parent, { announcementId }) => {
      return Announcement.findOne({ _id: announcementId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('announcements');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, isTeacher }) => {
      const user = await User.create({ username, email, password, isTeacher });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addAnnouncement: async (parent, { announcementText }, context) => {
      if (context.user) {
        const announcement = await Announcement.create({
          announcementText,
          announcementAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { announcements: announcement._id } }
        );

        return announcement;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { announcementId, commentText }, context) => {
      if (context.user) {
        return Announcement.findOneAndUpdate(
          { _id: announcementId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAnnouncement: async (parent, { announcementId }, context) => {
      if (context.user) {
        const announcement = await Announcement.findOneAndDelete({
          _id: announcementId,
          announcementAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { announcements: announcement._id } }
        );

        return announcement;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { announcementId, commentId }, context) => {
      if (context.user) {
        return Announcement.findOneAndUpdate(
          { _id: announcementId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
