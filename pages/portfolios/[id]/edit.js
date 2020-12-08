

import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import PortfolioNewForm from "@/components/forms/PortfolioNewForm";
import {useCreatePortfolio} from "@/apollo/actions";
import React from "react";
import {useRouter} from "next/router";
import BaseLayout from "../../../layouts/BaseLayout";
import {useUpdatePortfolio} from "@/apollo/actions";


const PortfolioEdit =  () => {
    const router = useRouter();
    const [updatePortfolioHandler, {error}] = useUpdatePortfolio();  //To update portfolios

     const editPortfolio = async () =>{
         await updatePortfolioHandler();
     };

    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="page-title">Edit Portfolio</h1>

                        <PortfolioNewForm/>

                    </div>
                </div>
            </div>
        </BaseLayout>
    );

}

export default withApollo(withAuth(PortfolioEdit, ['admin', 'instructor']));
