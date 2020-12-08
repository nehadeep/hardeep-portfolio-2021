import React from "react";
import {useGetUser} from "../apollo/actions";
import Redirect from "../components/shared/Redirect";

export default (WrappedComponent, role) => (props) => {

    const {data: {user} ={}, loading, error} = useGetUser({fetchPolicy: 'network-only'}); //this will not check user in cache , instead it will check user from server

    if(
        !loading && (!user ||error) && typeof window!== 'undefined'
    ){
       return <Redirect to="/login"/>
    }
    if(user){
        if(role && user.role !== role)
        return <WrappedComponent {...props}/>
    }

    return <p>Authenticating...</p>


}