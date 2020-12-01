import {useRouter} from "next/router";
import React from 'react';


const PortfolioDetail = () =>{
    const router = useRouter();
    const {id }= router.query; //this "id" name should match with the file name [id]

    return(
        <h1>I'm detail page Id: {id} </h1>
    )
};

export default PortfolioDetail;



// class PortfolioDetail extends React.Component{
//
//     static getInitialProps({query}){ //called on the server
//         //what you return here will get into this.props
//         return {query}
//     }
//     render() {
//         const {id} = this.props.query;
//         return (
//             <h1>I'm detail page Id: {id} </h1>
//         )
//     }
// }

//export default PortfolioDetail;