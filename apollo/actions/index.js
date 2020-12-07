import {useMutation, useQuery} from "@apollo/client";
import {CREATE_PORTFOLIO, DELETE_PORTFOLIO, GET_PORTFOLIOS, SIGN_IN, UPDATE_PORTFOLIO} from "../queries";





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

export const useSignIn = () => useMutation(SIGN_IN);
