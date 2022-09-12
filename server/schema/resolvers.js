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

        testProduct: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                .populate({'pledgeData'})

                return user.pledgeData.id(_id);
            }
            throw new AuthenticationError('Not logged in');
        },


        userPledges: async (parent, { pledge, action }) => {
            const params = {};

            if (pledge) {
                params.pledge = pledge;
            }

            if (action) {
                params.action = {
                    $search: action
                }
            }

            return await User.find(params).populate('pledgeData');
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
        savePledge: async (parnte, args, context) => {
            // if (context.user) {
            //     const pledge = await Pledge.create({ ...args, username: context.user.username })
                
            //     await User.findByIdAndUpdate(
            //         { _id: context.user._id },
            //         { $push: { pledgeData: pledge._id } },
            //         { new: true }
            //     );

            //     return pledge;
            // }

            // throw new AuthenticationError('Not logged in');

            if (context.user) {
                let updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { pledgeData: args.input } },
                    { new: true }
                )

                return updatedUser;
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
        }
    }

};

module.exports = resolvers;