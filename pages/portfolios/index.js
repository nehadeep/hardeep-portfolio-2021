import PortfolioCard from "@/components/portfolios/PortfolioCard";

import Link from "next/link";

import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import {useDeletePortfolio, useGetPortfolios, useUpdatePortfolio} from "@/apollo/actions";
import BaseLayout from "../../layouts/BaseLayout";
import React, {useEffect, useState} from "react";
import {useGetUser, useLazyGetUser} from "../../apollo/actions";


const Portfolios = () =>{

    const {loading, data} = useGetPortfolios(); //get all the portfolios

    const [deletePortfolioHandler] = useDeletePortfolio();

    const portfolios = data && data.portfolios || [];

    const {data: {user} ={}, error} = useGetUser({fetchPolicy: 'network-only'}); //this will not check user in cache , instead it will check user from server


    return (
        <BaseLayout>
                <section className="section-title">
                    <div className="px-2">
                        <div className="pt-5 pb-4">
                            <h1>Portfolios</h1>
                        </div>
                    </div>
                </section>
                <section className="pb-5">
                    <div className="row">
                        {user &&  <Link href="/portfolios/new" className="nav-link">
                            <button className="btn btn-primary"> Create New</button>
                        </Link> }
                        { portfolios.map(portfolio=>
                            <div className="col-md-12" key={portfolio._id}>


                                {user && <div className="portfolio-actions">
                                    <Link href="/portfolios/[id]/edit" as={`/portfolios/${portfolio._id}/edit`}
                                          className="nav-link">
                                        <button className="btn btn-warning"> Edit</button>
                                    </Link>
                                    <button onClick={() => deletePortfolioHandler({variables: {id: portfolio._id}})}
                                            className="btn btn-danger  ml-2"> Delete
                                    </button>
                                </div>
                                }
                                <Link href='/portfolios/[id]' as={`/portfolios/${portfolio._id}`}>
                                    <a className="card-link">
                                     <PortfolioCard portfolio={portfolio}/>
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
        </BaseLayout>
    )
};

export default withApollo(Portfolios, {getDataFromTree});