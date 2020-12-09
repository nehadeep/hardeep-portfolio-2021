import React from "react";
import {useGetUser} from "../apollo/actions";
import Redirect from "../components/shared/Redirect";
import SpinningLoader from "../components/shared/Loader";

export default (WrappedComponent, role) => (props) => {

    const {data: {user} ={}, loading, error} = useGetUser({fetchPolicy: 'network-only'}); //this will not check user in cache , instead it will check user from server

    if(
        !loading && (!user ||error) && typeof window!== 'undefined'
    ){
       return <Redirect to="/login" query={{message:'NOT_AUTHENTICATED'}}/>
    }
    if(user){
        if(role && !role.includes(user.role)){
            return <Redirect to="/login" query={{message:'NOT_AUTHORIZED'}}/>
        }
        return <WrappedComponent {...props}/>
     }

    return(
        <div className="spinner-container">
            <SpinningLoader variant="large"/>
        </div>
    )


}