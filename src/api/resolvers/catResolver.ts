import {Cat} from '../../interfaces/Cat';
import catModel from '../models/catModel';

// TODO: Add resolvers for cat

// 1. Queries
export default {
  Query: {
    // 1.1. cats
    cats: async () => {
      return await catModel.find();
    },
    // 1.2. catById
    catById: async (_parent: undefined, args: Cat) => {
      return await catModel.findById(args.id);
    },
    // 1.3. catsByOwner
    catsByOwner: async (_parent: undefined, args: Cat) => {
      return await catModel.find({owner: args.owner});
    },
    // 1.4. catsByArea
  },
  // 2. Mutations
  Mutation: {
    // 2.1. createCat
    createCat: async (_parent: undefined, args: Cat) => {
      console.log(args);
      const newCat = new catModel(args);
      return await newCat.save();
    },
  },
};

// 2.2. updateCat
// 2.3. deleteCat
