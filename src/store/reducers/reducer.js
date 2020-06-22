const initialState = {
    lastTokenTime: 0,
    tokenIsExpired: true,
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
        case 'TOKEN_EXPIRED': {
            const newState = Object.assign({}, state);
            newState.lastTokenTime = 0;
            newState.tokenIsExpired = true;
            return newState;
        }
        case 'GET_TOKEN': {
            console.log(action.payload);
            const newState = Object.assign({}, state);
            newState.token = action.payload.token;
            newState.lastTokenTime = new Date().getTime() / 1000;
            newState.tokenIsExpired = false;
            return newState;
        }
        default: return state;
    }
};