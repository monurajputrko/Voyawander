const initialState={
  isAuth: false,
  user: {}
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER_LOGIN':
            return {...state,isAuth: true,user: action.payload}

            case 'USER_LOGOUT':
                return initialState
        default:
            return state;
    }
}

export default userReducer;