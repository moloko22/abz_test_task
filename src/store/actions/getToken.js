import URLS from "../URLS";

export const getToken = (lastTime, tokenIsExpired) => dispatch =>{
    let timeout = lastTime + 39*60*1000;
    const currentTime = new Date().getTime() / 1000;
    if(tokenIsExpired || currentTime > timeout){
        console.log('Token is expired or was use, we will give for u new one');
        return fetch(URLS.GET_TOKEN)
            .then(res => res.json())
            .then(data => dispatch({type: 'GET_TOKEN', payload: data}))
            .catch(err => console.log(err));
    }else{
        console.log('Новый токен не нужен, старый все еще work)');
    }
};