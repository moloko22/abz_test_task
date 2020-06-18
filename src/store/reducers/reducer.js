const initialState = {
    usersList: [],
    nextUrl: '',
};
export default function list (state = initialState, action){
    switch(action.type){
        case 'GET_USERS': {
            const newState = Object.assign({}, state);
            newState.usersList = state.usersList.concat(action.payload.users);
            newState.nextUrl = action.payload.links.next_url;
            console.log(newState.usersList);
            return newState;
        }
        default: return state;
    }
};