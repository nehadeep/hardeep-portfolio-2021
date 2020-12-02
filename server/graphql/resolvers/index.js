
const { portfoliosData }= require('../../resources/portfolios_data');

const data = {
    portfolios : portfoliosData
};

exports.portfoliosQueries = {
    hello: () =>{
        return "hello"
    },
    portfolio: (root,{id}) =>{
        return data.portfolios.find(p=> p._id === id)
    },
    portfolios: () => {
        return data.portfolios;
    },

};

exports.portfolioMutations = {
    createPortfolio: (root,{input}) =>{
        const _id = require('crypto').randomBytes(10).toString('hex');
        const newPortfolio = {...input};
        newPortfolio._id = _id;
        data.portfolios.push(newPortfolio);
        return newPortfolio;
    },
    updatePortfolio: (root, {id, input}) =>{
        const index = data.portfolios.findIndex(p=>p._id === id);
        const oldPortfolio = data.portfolios[index];
        const updatedPortfolio = {...oldPortfolio, ...input}; //merge the updated data with the old data
        data.portfolios[index] = updatedPortfolio;
        return updatedPortfolio
    },
    deletePortfolio: (root, {id}) =>{
        const index = data.portfolios.findIndex(p=>p._id === id);
        data.portfolios.splice(index, 1);
        return id;
    }
};