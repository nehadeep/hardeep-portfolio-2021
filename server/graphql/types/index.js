
const techStack = `
 value: String,
 label: String
`;

const portfolioFields = `        
        title: String,
        jobTitle: String,
        description: String,
        jobResponsibilities: [String],
        startDate: String,
        endDate: String,
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
           
           type techStack {
              value: String,
              label: String
           }
           
           
         input companyData {
                name: String,
                city: String,
                state: String,
                country: String,
                zipCode: String,
                website: String,
           }
           
           input techStackData {
            value: String,
            label: String
           }
           
  type Portfolio {  
        _id: ID,
        ${portfolioFields},
         company: company,
         techStack : [techStack]
        
    }
    
    input PortfolioInput {
       ${portfolioFields},
        company: companyData
        techStack : [techStackData]
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