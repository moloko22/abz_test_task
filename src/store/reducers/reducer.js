const initialState = {
    token: '',
    positions: [],
    usersList: [],
    nextUrl: '',
};
export default function list (state = initialState, action){
    switch(action.type){
        case 'GET_USERS': {
            const newState = Object.assign({}, state);
            newState.usersList = state.usersList.concat(action.payload.users);
            newState.nextUrl = action.payload.links.next_url;
            return newState;
        }
        case 'GET_POSITIONS': {
            const newState = Object.assign({}, state);
            newState.positions = state.positions.concat(action.payload.positions);
            return newState;
        }
        case 'GET_TOKEN': {
            const newState = Object.assign({}, state);
            newState.token = action.payload.token;
            return newState;
        }
        default: return state;
    }
};