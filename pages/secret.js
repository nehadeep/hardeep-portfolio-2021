

import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import BaseLayout from "../layouts/BaseLayout";
import React from "react";

const Secret =  withAuth(() => {


    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">SECRET</h1>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );

}, ['admin'])

export default withApollo(Secret);