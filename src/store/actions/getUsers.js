import URLS from '../URLS';
export const getUsers = (url) => dispatch =>{
    if(typeof url !== 'object' && !url) {
        url = URLS.GET_USERS_URL;
    }
    return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => dispatch({type: 'GET_USERS', payload: data}));
};