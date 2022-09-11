const { User, Home, Travel, Pledge } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {

        // get all data on a user
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('homeData')
                .populate('travelData')
                .populate('pledgeData');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        // get all pledges for a user
        pledges: async () => {
            return  Pledge.find()
                .select('-__v')
        }
    },

    Mutation: {
        // add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // login as a user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        // saving a pledge
        // savePledge: async (parnte, args, context) => {
        //     if (context.user) {
        //         let updatedUser = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { pledgeData: args.input } },
        //             { new: true }
        //         )

        //         return updatedUser;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },

        // // remove a pledge
        // removePledge: async (parent, args, context) => {
        //     if (context.user) {
        //         let updatedUser = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $pull: { pledgeData: { pledgeId: args.pledgeId } } },
        //             { new: true }
        //         )

        //         return updatedUser;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },

        // addTravel: async (parent, args, context) => {
        //     if (context.user) {
        //         const travel = await Travel.create({ ...args, username: context.user.username });

        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { pledgeData: travel._id } },
        //             { new: true }
        //         )

        //         return travel;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },

        // addHome: async (parent, args, context) => {
        //     if (context.user) {
        //         const home = await Home.create({ ...args, username: context.user.username });

        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { homeData: home._id } },
        //             { new: true }
        //         )

        //         return home;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // }
    }

};

module.exports = resolvers;