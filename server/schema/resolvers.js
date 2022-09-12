const { User, Pledge } = require('../models');
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

        // get all pledges
        pledges: async () => {
            return  Pledge.find()
                .select('-__v')
        },


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



        addTravel: async (parent, { vehicleEmissions, publicTransitEmissions, planeEmissions }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { travelData: { vehicleEmissions, publicTransitEmissions, planeEmissions } } },
                    { new: true }
                    )
                    .populate('travelData');

                    return updatedUser;
                }

                throw new AuthenticationError('Not logged in');
            },

            addHome: async (parent, { waterEmissions, electricityEmissions, heatEmissions }, context) => {
                if (context.user) {
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $push: { homeData: { waterEmissions, electricityEmissions, heatEmissions } } },
                        { new: true }
                        )
                        .populate('homeData');

                        return updatedUser;
                    }

                    throw new AuthenticationError('Not logged in');
                },

                // save a pledge to a user
                addPledge: async (parent, args, context) => {
                    if (context.user) {
                        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
                    }
                    throw new AuthenticationError('Not logged in');
                },


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
    }

};

module.exports = resolvers;