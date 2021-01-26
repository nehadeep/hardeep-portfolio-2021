

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}



//mongodb+srv://hardeep_kaur90:Labanlane#56@cluster0.fgdha.mongodb.net/portfolioDb?retryWrites=true&w=majority