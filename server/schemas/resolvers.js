const { AuthenticationError } = require('apollo-server-express');
const { User, Announcement, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
    },
    announcements: async () => {
      return Announcement.find().sort({ createdAt: -1 });
    },
    announcement: async (parent, { id }) => {
      const announcement = await Announcement.findById(id);
  
      if (!announcement) {
        throw new Error('Announcement not found');
      }
  
      return announcement;
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
    createAnnouncement: async (parent, { content }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to create an announcement');
      }
  
      // Create the announcement with the authenticated user's ID
      const announcement = new Announcement({
        content,
        createdBy: context.user._id, // Access user's ID from context
      });
  
      // Save the announcement to the database
      await announcement.save();
  
      // Return the created announcement
      return announcement;
    },
  
  },
}

module.exports = resolvers;
