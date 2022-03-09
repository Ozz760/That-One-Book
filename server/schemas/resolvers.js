const { UserInputError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    test: () => 1,
  },
  Mutation: {
    async createUser(parent, args) {
      try {
        const user = await User.create(args);
        const token = await signToken({
          _id: user._id,
          email: user.email,
          username: user.username,
        });
        return { user, token };
      } catch (error) {
        console.log(error);
        throw new UserInputError("Username and email must be unique");
      }
    },
  },
};

module.exports = resolvers;
