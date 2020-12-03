
const portfolioFields = `        
        title: String,
        jobTitle: String,
        description: String,
        jobResponsibilities: [String],
        startDate: String,
        endDate: String,
        techStack: [String]
`;

exports.portfolioTypes = `

         type company {
                name: String,
                city: String,
                state: String,
                country: String,
                zipCode: String,
                website: String,
           }
         input companyData {
                name: String,
                city: String,
                state: String,
                country: String,
                zipCode: String,
                website: String,
           }
           
  type Portfolio {
        _id: ID,
        ${portfolioFields},
         company: company,
        
    }
    
    input PortfolioInput {
       ${portfolioFields},
        company: companyData
     }
    
`;

exports.userTypes = `
   
   input SignUpInput{
     avatar: String
     email: String
     name: String
     userName: String!
     password: String!
     passwordConfirmation: String!
     
   }

`;