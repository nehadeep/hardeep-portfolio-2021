import { gql} from '@apollo/client';


export const GET_PORTFOLIO = gql`
         query Portfolio($id:ID){ 
          portfolio (id:$id) {
            _id, 
            title, 
           company{
             name,
             city,
             state,
             country,
            },
            jobTitle,
            description,
            startDate,
            endDate,
            techStack
            }
          }  
  `;

export const GET_PORTFOLIOS = gql`
         query Portfolios { 
          portfolios {
            _id, 
            title, 
            company{
             name,
             city,
             state,
             country,
            },
            jobTitle,
            description,
            startDate,
            endDate,
            techStack
            }
          }  
 `;

export const CREATE_PORTFOLIO = gql`
    mutation CreatePortfolio { 
          createPortfolio(input : {
            title: "New Job", 
            company: {
             name:"create company",
             city:"create city",
             state: "create state",
             country: "create country",
            },
            jobTitle: "create Job Title",
            description: "Very pleasant",
            startDate: "12/03/2019",
            endDate: "12/3/2020"
            }) {
                _id, 
                title, 
                company{
                 name,
                 city,
                 state,
                 country,
                 },
                jobTitle,
                description,
                startDate,
                endDate,
            }
          }
          `;

export const UPDATE_PORTFOLIO = gql`

        mutation UpdatePortfolio($id: ID) { 
          updatePortfolio(id: $id, input : {
            title: "Job in CDW",
            company: {
                name: "CDW",
                city: "Chicago",
                state: "Illinois",
                country: "USA",
                zipCode: "",
                website: "https://www.cdw.com/"
            },
            jobTitle: "UI Developer",
            description: "CDW is a leading provider of integrated information technology solutions. It helps 250,000 small, medium and large business, government, education and healthcare customers by delivering critical solutions to their increasingly complex IT needs. A Fortune 500 company, CDW was founded in 1984 and employs more than 8,400 coworkers. For the year ended December 31, 2015, the company generated net sales of over $12.9 billion.CDW broad array of offerings range from discrete hardware and software products to integrated IT solutions such as mobility, security, data center optimization, cloud computing, virtualization and collaboration.",
            jobResponsibilities: [],
            startDate: "02/20/2015",
            endDate: "11/01/2016",
            techStack: ["Javascript", "Jquery", "CSS3","SCSS", "Webpack", "Gulp.js", "Karma.js","Mocha", "Chai"]
            }) {
                _id, 
                title, 
                company{
                 name,
                 city,
                 state,
                 country,
                 },
                jobTitle,
                description,
                startDate,
                endDate
            }
          }
`;

export const DELETE_PORTFOLIO = gql`
        mutation DeletePortfolio($id: ID) { 
          deletePortfolio(id: $id)
  }`;


export const SIGN_UP = gql`
mutation SignUp(
 $avatar: String
 $userName: String!
 $email: String!
 $password: String!
 $passwordConfirmation: String!
 ) {
   signUp(input:{
     avatar: $avatar
     userName: $userName
     email: $email
     password: $password
     passwordConfirmation: $passwordConfirmation
   })
   
   }
`;