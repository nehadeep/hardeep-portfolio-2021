

import React from 'react';
import RegisterForm from "../components/forms/RegisterForm";
import {SIGN_UP} from "../apollo/queries";
import withApollo from "@/hoc/withApollo";
import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import Redirect from "@/components/shared/Redirect";
import BaseLayout from "../layouts/BaseLayout";

const Register =  () => {

    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops something went wrong.'
    }

    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Register</h1>
                        <Mutation mutation={SIGN_UP}>
                            {(signUpUser, {data, error}) =>
                                <>
                                    <RegisterForm onSubmit = {registerData =>{
                                       signUpUser({variables: registerData})
                                    }}/>
                                    {data && data.signUp && <Redirect to="/login" query={{message: 'LOGGED_IN'}} />}
                                    {error && <div className="alert alert-danger">{errorMessage(error)}</div> }
                                </>
                            }
                        </Mutation>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );

};

export default withApollo(Register);