import PortfolioCard from "@/components/portfolios/PortfolioCard";

import Link from "next/link";

import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import {useDeletePortfolio, useGetPortfolio, useUpdatePortfolio} from "@/apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import React from "react";


const Portfolios = () =>{

    const {loading, data} = useGetPortfolio(); //get all the portfolios


    const [updatePortfolioHandler] = useUpdatePortfolio();  //To update portfolios

    const [deletePortfolioHandler] = useDeletePortfolio();

    const portfolios = data && data.portfolios || [];

    return (
        <BaseLayout>
                <section className="section-title">
                    <div className="px-2">
                        <div className="pt-5 pb-4">
                            <h1>Portfolios</h1>
                        </div>
                    </div>
                    {/*<button onClick={createPortfolioHandler} className="btn btn-primary">Create Portfolio</button>*/}
                </section>
                <section className="pb-5">
                    <div className="row">
                        { portfolios.map(portfolio=>
                            <div className="col-md-12" key={portfolio._id}>
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
        </BaseLayout>
    )
};

export default withApollo(Portfolios, {getDataFromTree});