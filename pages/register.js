

import React from 'react';
import RegisterForm from "../components/forms/RegisterForm";
import {SIGN_UP} from "../apollo/queries";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import { graphql } from '@apollo/client/react/hoc';

const Register =  () => {


    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Register</h1>
                        <Mutation mutation={SIGN_UP}>
                            {(signUpUser, {data, error}) =>
                                <>
                                    <RegisterForm onSubmit = {registerData =>{
                                        console.log("data", registerData)
                                       signUpUser({variables: registerData})
                                    }}/>

                                </>
                            }
                        </Mutation>
                    </div>
                </div>
            </div>
        </>
    );

};

export default withApollo(Register);