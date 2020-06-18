import URLS from "../URLS";

export const registration = (obj, token) => dispatch =>{
    console.log(token);
    return fetch(URLS.POST_USER_URL, {
        method: 'POST',
        headers: {
            'Token': token,
        },
        body: obj,
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                alert('ПОЛЬЗОВАТЕЛЬ ЗАРЕГИСТРИРОВАН');
                dispatch({type: 'TOKEN_EXPIRED'});
            }else{
                alert('Ошибка сервера!!! Пользователь не зарегистрирован');
            }
        })
        .catch(err => console.log(err));
};