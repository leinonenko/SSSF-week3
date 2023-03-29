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
    catById: async (parent: any, args: any) => {
      return await catModel.findById(args.id);
    },
    // 1.3. catsByOwner
    catsByOwner: async (parent: any, args: any) => {
      return await catModel.find({owner: args.owner});
    },
    // 1.4. catsByArea
  },
};

// 2. Mutations
// 2.1. createCat
// 2.2. updateCat
// 2.3. deleteCat
