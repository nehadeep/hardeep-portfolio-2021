

exports.portfoliosQueries = {
    portfolio: (root,{id}, ctx) =>{
        return ctx.models.Portfolio.getById(id);
    },
    portfolios: (root, args, ctx) => {
        return ctx.models.Portfolio.getAll();
    },

};

exports.portfolioMutations = {
    createPortfolio: async (root,{input},ctx) =>{
        const createdPortfolio = await ctx.models.Portfolio.create(input);
        return createdPortfolio;
    },
    updatePortfolio: async (root, {id, input}, ctx) =>{
        const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(id, input);
        return updatedPortfolio;
    },
    deletePortfolio: async (root, {id}, ctx) =>{
        const deletedId = await ctx.models.Portfolio.findAndDelete(id);
        return deletedId._id;
    },


};

exports.userMutations = {
    signUp: async (root, {input}, ctx) =>{
        const registeredUser = await ctx.models.User.signUp(input);
        return registeredUser._id;
    },
    signIn: async (root, args, ctx) =>{
      const registeredUser = await ctx.models.User.signIn();
    },

    signOut: async (root, args, ctx) =>{
        return ctx.models.User.signOut();
    }
}