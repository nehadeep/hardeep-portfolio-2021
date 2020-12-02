import axios from 'axios';
import PortfolioCard from "@/components/portfolios/PortfolioCard";

import Link from "next/link";
import {useState} from "react";

const fetchPortfolios = () =>{
    const query = `query Portfolios { 
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

    return axios.post('http://localhost:3000/graphql', {query}).
    then(({data: graph})=> graph.data).then(data=> data.portfolios)
};

const createPortfolio = () =>{
    const query = `mutation CreatePortfolio { 
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
          }`;

    return axios.post('http://localhost:3000/graphql', {query}).
    then(({data: graph})=> graph.data).then(data=> data.createPortfolio)
};

const updatePortfolio = (id) =>{
    const query = `mutation UpdatePortfolio($id: ID) { 
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
          }`;
    const variables = {id};
    return axios.post('http://localhost:3000/graphql', {query,variables}).
    then(({data: graph})=> graph.data).then(data=> data.updatePortfolio)
};

const deletePortfolio = (id) =>{
    const query = `mutation DeletePortfolio($id: ID) { 
          deletePortfolio(id: $id)
          }`;
    const variables = {id};
    return axios.post('http://localhost:3000/graphql', {query,variables}).
    then(({data: graph})=> graph.data).then(data=> data.deletePortfolio)
};
const Portfolios = ({data}) =>{

    const [portfolios, setPortfolios] = useState(data.portfolios);

    const createPortfolioHandler = async () =>{
       const newPortfolio = await createPortfolio();
       const newPortfolios = [...portfolios, newPortfolio];
       setPortfolios(newPortfolios);
    };

    const updatePortfolioHandler = async (id) =>{

       const updatedPortfolio =  await updatePortfolio(id);
       const index = portfolios.findIndex(p=>p._id === id);
       const newPortfolios = portfolios.slice();
       newPortfolios[index] = updatedPortfolio;
       setPortfolios(newPortfolios);
    };

    const deletePortfolioHandler = async (id) =>{
        const deletedPortfolioId = await deletePortfolio(id);
        const index = portfolios.findIndex(p=>p._id === deletedPortfolioId);
        const newPortfolios = portfolios.slice();
        newPortfolios.splice(index, 1);
        setPortfolios(newPortfolios);
    };

    return (
        <>
                <section className="section-title">
                    <div className="px-2">
                        <div className="pt-5 pb-4">
                            <h1>Portfolios</h1>
                        </div>
                    </div>
                    <button onClick={createPortfolioHandler} className="btn btn-primary">Create Portfolio</button>
                </section>
                <section className="pb-5">
                    <div className="row">
                        { portfolios.map(portfolio=>
                            <div className="col-md-4" key={portfolio._id}>
                                <Link href='/portfolios/[id]' as={`/portfolios/${portfolio._id}`}>
                                    <a className="card-link">
                                     <PortfolioCard portfolio={portfolio}/>
                                    </a>
                                </Link>
                                <button onClick={()=>deletePortfolioHandler(portfolio._id)} className="btn btn-warning">Delete</button>
                                <button onClick={()=>updatePortfolioHandler(portfolio._id)} className="btn btn-primary">Update</button>
                            </div>
                        )}
                    </div>
                </section>
        </>
    )
};

Portfolios.getInitialProps = async () =>{
const portfolios = await fetchPortfolios();
  return {data: {portfolios}};
};

export default Portfolios;