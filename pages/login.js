

import React from 'react';
import LoginForm from "../components/forms/LoginForm";
import {Mutation} from "@apollo/client/react/components";
import {SIGN_IN} from "@/apollo/queries";
import withApollo from "@/hoc/withApollo";
import {useSignIn} from "@/apollo/actions";
import Redirect from "../components/shared/Redirect";


const Login =  () => {
    const errorMessage = (error) => {
        return error.graphQLErrors && error.graphQLErrors[0].message || 'Oops something went wrong.'
    }
    const [signIn, {data, error}] = useSignIn();

    return (
        <>
                <div className="bwm-form mt-5">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <h1 className="page-title">Login</h1>

                                <LoginForm onSubmit={loginData=> signIn({variables: loginData})}/>
                                {data && data.signIn && <Redirect to="/" />}
                                {error && <div className="alert alert-danger">{errorMessage(error)}</div> }

                        </div>
                    </div>
                </div>
        </>
    );

}

export default withApollo(Login);