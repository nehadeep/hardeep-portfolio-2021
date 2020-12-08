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
  

    mutation CreatePortfolio(
        $title: String
        $name: String
        $city: String
        $state: String
        $country: String
        $jobTitle: String
        $description: String
        $startDate: String
        $endDate: String
    ) { 
          createPortfolio(input : {
            title: $title
            company: {
              name: $name
              city: $city
              state: $state
              country: $country
            }
            jobTitle: $jobTitle
            description: $description
            startDate: $startDate
            endDate: $endDate
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

export const SIGN_IN = gql`
mutation SignIn(
$email: String!
$password: String!
) {
  signIn(input:{
   email: $email
   password: $password
 }) {
  _id
   avatar
   userName
   name
   email
   role
  }
 }
    
`;

export const SIGN_OUT = gql`
mutation SignOut { signOut}
`

export const GET_USER = gql`
query User {
    user {
      _id
       avatar
       userName
       name
       email
       role
    }
}
`;