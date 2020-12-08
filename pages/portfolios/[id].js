import {useRouter} from "next/router";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useQuery, useLazyQuery} from "@apollo/client";
//import { useQuery } from '@apollo/react-hooks';
import {GET_PORTFOLIO} from "@/apollo/queries";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import BaseLayout from "../../layouts/BaseLayout";

// const fetchPortfoliosById = (id) =>{ //replaced with apollo client
//     const query = `query Portfolio($id:ID){
//           portfolio (id:$id) {
//             _id,
//             title,
//             company,
//             companyWebsite,
//             location,
//             jobTitle,
//             description,
//             startDate,
//             endDate
//             }
//           }
//         `;
//
//     const variables = {id};
//
//     return axios.post('http://localhost:3000/graphql', {query, variables}).
//     then(({data: graph})=> graph.data).then(data=> data.portfolio)
// };

const PortfolioDetail = ({query}) =>{

    const { loading, data , error} = useQuery(GET_PORTFOLIO, {variables: {id: query.id}});

    const portfolio = data && data.portfolio ||{};

    return(
        <BaseLayout>
        <div className="portfolio-detail">
            <div className="container">

                <div className="jumbotron">
                    <h1 className="display-3">{portfolio.title}</h1>
                    <p className="lead">{portfolio.jobTitle}</p>
                    <p>
                        <a className="btn btn-lg btn-success" href={portfolio.companyWebsite} role="button">
                            See Company</a>
                    </p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4 className="title">Location</h4>
                        <p className="text">{portfolio.location}</p>

                        <h4 className="title">Start Date</h4>
                        <p className="text">{portfolio.startDate}</p>
                    </div>

                    <div className="col-lg-6">
                        {/* TODO: days later... */}
                        <h4 className="title">Days</h4>
                        <p className="text">44</p>

                        <h4 className="title">End Date</h4>
                        <p className="text">{portfolio.endDate}</p>
                    </div>
                    <div className="col-md-12">
                        <hr />
                        <h4 className="title">Description</h4>
                        <p>{portfolio.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </BaseLayout>
    )
};



PortfolioDetail.getInitialProps = async({query}) =>{
   // const portfolio = await fetchPortfoliosById(query.id);
      return {query};

}

export default withApollo(PortfolioDetail, {getDataFromTree});

// class PortfolioDetail extends React.Component{
//
//     static getInitialProps({query}){ //called on the server
//         //what you return here will get into this.props
//         return {query}
//     }
//     render() {
//         const {id} = this.props.query;
//         return (
//             <h1>I'm detail page Id: {id} </h1>
//         )
//     }
// }

