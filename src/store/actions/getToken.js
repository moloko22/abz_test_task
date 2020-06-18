import URLS from "../URLS";

export const getToken = () => dispatch =>{
    return fetch(URLS.GET_TOKEN)
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_TOKEN', payload: data}))
        .catch(err => console.log(err));
}