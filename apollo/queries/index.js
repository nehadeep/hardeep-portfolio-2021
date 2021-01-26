import { gql} from '@apollo/client';

//[techStackData] and companyData variables below come from how to define the queries in server

export const GET_PORTFOLIO = gql`
         query Portfolio($id:ID){ 
          portfolio (id:$id) {
            _id
            daysOfExperience @client
            title
           company{
             name
             city
             state
             country
            },
            jobTitle
            description
            jobResponsibilities
            startDate
            endDate
             techStack{
             label
             value
             __typename @skip(if: true)
              }
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
            jobResponsibilities,
            startDate,
            endDate,
            techStack{
             label,
             value
              }
            }
          }  
 `;

export const CREATE_PORTFOLIO = gql`
  

    mutation CreatePortfolio(
        $title: String
        $company: companyData
        $jobTitle: String
        $description: String
        $jobResponsibilities: String
        $startDate: String
        $endDate: String
        $techStack: [techStackData]    

    ) { 
          createPortfolio(input : {
            title: $title
            company: $company
            jobTitle: $jobTitle
            description: $description
            jobResponsibilities: $jobResponsibilities
            startDate: $startDate
            endDate: $endDate
            techStack: $techStack
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
                jobResponsibilities,
                startDate,
                endDate,
                techStack{
                 label,
                 value
                }
            }
          }
          `;

export const UPDATE_PORTFOLIO = gql`

        mutation UpdatePortfolio(
        $id: ID
        $title: String
        $company: companyData
        $jobTitle: String
        $description: String
        $jobResponsibilities: String
        $startDate: String
        $endDate: String   
        $techStack: [techStackData]    
         ) { 
          updatePortfolio(id: $id, input : {
            title: $title
            company: $company
            jobTitle: $jobTitle
            description: $description
            jobResponsibilities: $jobResponsibilities
            startDate: $startDate
            endDate: $endDate,
            techStack: $techStack
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
                jobResponsibilities,
                startDate,
                endDate,
                techStack{
                 label,
                 value
                }
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