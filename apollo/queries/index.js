import { gql} from '@apollo/client';
//import { gql } from "apollo-boost";
export const GET_PORTFOLIO = gql`
         query Portfolio($id:ID){ 
          portfolio (id:$id) {
            _id, 
            title, 
            company,
            companyWebsite,
            location,
            jobTitle,
            description,
            startDate,
            endDate
            }
          }  
  `;

export const GET_PORTFOLIOS = gql`
         query Portfolios { 
          portfolios {
            _id, 
            title, 
            company,
            companyWebsite,
            location,
            jobTitle,
            description,
            startDate,
            endDate
            }
          }  
 `;

export const CREATE_PORTFOLIO = gql`
    mutation CreatePortfolio { 
          createPortfolio(input : {
            title: "New Job", 
            company: "New Company",
            companyWebsite : "New Website",
            location: "New Location",
            jobTitle: "Job Title",
            description: "Very pleasant",
            startDate: "12/03/2019",
            endDate: "Present"
            }) {
                _id, 
                title, 
                company,
                companyWebsite,
                location,
                jobTitle,
                description,
                startDate,
                endDate
            }
          }
          `;

export const UPDATE_PORTFOLIO = gql`

        mutation UpdatePortfolio($id: ID) { 
          updatePortfolio(id: $id, input : {
            title: "update Job", 
            company: "update Company",
            companyWebsite : "update Website",
            location: "update Location",
            jobTitle: "update Title",
            description: "update Very pleasant",
            startDate: "12/03/2019",
            endDate: "update Present"
            }) {
                _id, 
                title, 
                company,
                companyWebsite,
                location,
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