export const getUsers = (url) => dispatch =>{
    if(typeof url !== 'object' && !url) {
        url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
    }
    return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => dispatch({type: 'GET_USERS', payload: data}));
};