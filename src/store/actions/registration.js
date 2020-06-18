import URLS from "../URLS";

export const registration = (obj, token) =>{
    console.log(obj);
    console.log(JSON.stringify(obj));
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
            }else{
                alert('Ошибка сервера!!! Пользователь не зарегистрирован');
            }
        })
        .catch(err => console.log(err));
};