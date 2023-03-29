import {User} from '../../models/user';
import {userModel} from '../../models/userModel';
// TODO: Add resolvers for user
// 1. Queries
export default {
  Query: {
    // 1.1. users
    users: async () => {
      return await userModel.find();
    },
    // 1.2. userById
    userById: async (parent: any, args: any) => {
      return await userModel.findById(args.id);
    },
  },

// 2. Mutations
// 2.1. createUser
  Mutation: {
    createUser: async (parent: any, args: any) => {
        const user = new userModel(args);
        return await user.save();
    },
    },
};
// 2.2. updateUser        
// 2.3. deleteUser
