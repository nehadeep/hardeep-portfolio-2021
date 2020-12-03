import axios from 'axios';
import PortfolioCard from "@/components/portfolios/PortfolioCard";

import Link from "next/link";
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {GET_PORTFOLIOS, CREATE_PORTFOLIO} from "@/apollo/queries";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import {DELETE_PORTFOLIO, UPDATE_PORTFOLIO} from "../../apollo/queries";


const Portfolios = () =>{

    const {loading, data} = useQuery(GET_PORTFOLIOS); //get all the portfolios

    const [createPortfolioHandler] = useMutation(CREATE_PORTFOLIO, //To create portfolios

        {

            update(cache, {data:{createPortfolio}}){
             const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS});
                cache.writeQuery({
                    query: GET_PORTFOLIOS,
                    data: {portfolios: [...portfolios, createPortfolio]}
                })
        }
        });

    const [updatePortfolioHandler] = useMutation(UPDATE_PORTFOLIO);  //To update portfolios


    const [deletePortfolioHandler] = useMutation(DELETE_PORTFOLIO, { //to delete portfolios
        update(cache, {data:{deletePortfolio}}){
            const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS});
             const newPortfolios = portfolios.filter(p=>p._id!== deletePortfolio);
            cache.writeQuery({
                query: GET_PORTFOLIOS,
                data: {portfolios: newPortfolios}
            })
        }
    });

    const portfolios = data && data.portfolios || [];

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
                                <button onClick={()=>deletePortfolioHandler({variables:{id:portfolio._id}})} className="btn btn-warning">Delete</button>
                                <button onClick={()=>updatePortfolioHandler({variables: {id:portfolio._id}})} className="btn btn-primary">Update</button>
                            </div>
                        )}
                    </div>
                </section>
        </>
    )
};

export default withApollo(Portfolios, {getDataFromTree});