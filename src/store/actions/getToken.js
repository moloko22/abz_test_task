import URLS from "../URLS";

export const getToken = (lastTime) => dispatch =>{
    let timeout = lastTime === 0 ? 0 : lastTime + 39*60*1000;
    const currentTime = new Date().getTime() / 1000;
    if(currentTime > timeout) {
        return fetch(URLS.GET_TOKEN)
            .then(res => res.json())
            .then(data => dispatch({type: 'GET_TOKEN', payload: data}))
            .catch(err => console.log(err));
    }else{
        console.log('Новый токен не нужен, старый все еще work)');
    }
};