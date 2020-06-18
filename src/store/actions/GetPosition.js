import URLS from "../URLS";
export const getPositions = () => dispatch =>{
    return fetch(URLS.GET_POSITIONS)
        .then(res => {
            return res.json();
        })
        .then(data => dispatch({type: 'GET_POSITIONS', payload: data}));
};