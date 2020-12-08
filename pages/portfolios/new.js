

import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import PortfolioNewForm from "@/components/forms/PortfolioNewForm";
import {useCreatePortfolio} from "@/apollo/actions";
import React from "react";
import {useRouter} from "next/router";
import BaseLayout from "../../layouts/BaseLayout";


const PortfolioNew =  () => {
    const router = useRouter();
    debugger;
    const [createPortfolioHandler, {error}] = useCreatePortfolio(); //To create portfolios
    const errorMessage = (error) => {
        debugger;
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops something went wrong.'
    };

    const createPortfolio = async (data) =>{
        await createPortfolioHandler({variables: data});
        router.push('./portfolios');

    }
    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="page-title">Create New Portfolio</h1>

                        <PortfolioNewForm
                            onSubmit={createPortfolio}/>

                            {error && <div className="alert alert-danger">{errorMessage(error)}</div> }

                    </div>
                </div>
            </div>
        </BaseLayout>
    );

}

export default withApollo(withAuth(PortfolioNew, ['admin', 'instructor']));
