

import React, {useEffect} from 'react';

import withApollo from "@/hoc/withApollo";
import {useSignOut} from "@/apollo/actions";
import {useRouter} from "next/router";


const Logout =  ({apollo}) => {

    const [signOut] = useSignOut();
    const router = useRouter();


    useEffect(()=>{
        signOut().then(()=>{
            apollo.resetStore().then(()=> router.push('/login'))
        })
    }, [])

    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Logout</h1>

                          <p>Signing Out...</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default withApollo(Logout);