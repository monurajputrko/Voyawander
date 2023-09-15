
export const setUserLogin =(payload)=>{
return (dispatch)=>{
    dispatch({type: 'SET_USER_LOGIN', payload: payload});
}
}

export const userLogOut=()=>{
return (dispatch)=>{
    dispatch({type: 'USER_LOGOUT'})
}
}


