

import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import PortfolioNewForm from "@/components/forms/PortfolioNewForm";
import React from "react";
import {useRouter} from "next/router";
import BaseLayout from "../../../layouts/BaseLayout";
import {useUpdatePortfolio, useGetPortfolio} from "@/apollo/actions";
import { toast } from 'react-toastify';


const PortfolioEdit =  () => {
    const router = useRouter();
    const {id} = router.query;
    const { loading, data } = useGetPortfolio({variables: {id}});
    console.log("data", data);

    const [updatePortfolioHandler, {error}] = useUpdatePortfolio();  //To update portfolios

    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops something went wrong.'
    }
     const editPortfolio = async (data) =>{
        console.log("edited dara", data);
         await updatePortfolioHandler({variables: {id, ...data}});
         toast.success('Portfolio has been updated', {autoClose: 2000});
     };

    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="page-title">Edit Portfolio</h1>
                        { data &&
                            <PortfolioNewForm initialData={data.portfolio} create={false}
                            onSubmit={editPortfolio}/>
                        }
                        {error && <div className="alert alert-danger">{errorMessage(error)}</div> }

                    </div>
                </div>
            </div>
        </BaseLayout>
    );

}

export default withApollo(withAuth(PortfolioEdit, ['admin', 'instructor']));
