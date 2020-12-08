import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {
    CREATE_PORTFOLIO,
    DELETE_PORTFOLIO,
    GET_PORTFOLIOS,
    GET_USER,
    SIGN_IN,
    SIGN_OUT,
    UPDATE_PORTFOLIO
} from "../queries";





export const useGetPortfolio = () => useQuery(GET_PORTFOLIOS); //get all the portfolios

export const useCreatePortfolio= () => useMutation(CREATE_PORTFOLIO, //To create portfolios

    {

        update(cache, {data:{createPortfolio}}){
            const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS});
            cache.writeQuery({
                query: GET_PORTFOLIOS,
                data: {portfolios: [...portfolios, createPortfolio]}
            })
        }
    });

export const useUpdatePortfolio = ()=> useMutation(UPDATE_PORTFOLIO);  //To update portfolios


export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO, { //to delete portfolios
    update(cache, {data:{deletePortfolio}}){
        const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS});
        const newPortfolios = portfolios.filter(p=>p._id!== deletePortfolio);
        cache.writeQuery({
            query: GET_PORTFOLIOS,
            data: {portfolios: newPortfolios}
        })
    }
});

//AUTH action start
export const useSignIn = () => useMutation(SIGN_IN, { //this cache is to load the nav bar again after login in
    update(cache, {data:{signIn: signedInUser}}){
        cache.writeQuery({
            query: GET_USER,
            data: {user: signedInUser}
        })
    }
});

export const useSignOut = () => useMutation(SIGN_OUT);
export const useLazyGetUser = () => useLazyQuery(GET_USER);

export const useGetUser = () => useQuery(GET_USER)
