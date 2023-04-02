import {User} from '../../interfaces/User';
import userModel from '../models/userModel';
// TODO: Add resolvers for user

// 1. Queries
export default {
  Cat: {
    owner: async (parent: any) => {
      return await userModel.findById(parent.owner);
    },
  },
  Query: {
    // 1.1. users
    users: async () => {
      return await userModel.find();
    },
    // 1.2. userById
    userById: async (_parent: undefined, args: any) => {
      return await userModel.findById(args.id);
    },
  },
  // 2. Mutations
  Mutation: {
    // 2.1. createUser
    createUser: async (_parent: undefined, args: User) => {
      const newUser = new userModel(args);
      return await newUser.save();
    },
  },
};

// 2.2. updateUser
// 2.3. deleteUser
