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
            title: "update Job", 
            company: {
             name:"update company",
             city:"update city",
             state: "update state",
             country: "updated company"
             }
            jobTitle: "update Title",
            description: "update Very pleasant",
            startDate: "12/03/2019",
            endDate: "09/12/2020"
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