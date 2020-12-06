
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

 type User{
 _id: ID
  avatar: String
  userName: String
  name: String
  email: String
  role: String
 }
   
   input SignUpInput{
     avatar: String
     userName: String!
     name: String
     email: String!
     password: String!
     passwordConfirmation: String!
     
   }
   
   input SignInInput {
       email: String!
       password: String!
   }

`;