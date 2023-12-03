import { headerAuth } from "../components/api/api";


const SET_AUTH = 'SET-AUTH';


let initial = {
    id: null,
    email: null,
    login: null,
    isFetchin: false,
}

const HeaderReducer = (state = initial, action) => {
    console.log(state)
    switch (action.type) {
        case SET_AUTH:
         
            return { ...state, ...action.data}

        default:
            return state;
    }
}


export const setAuthMe = (id, email, login, isFetchin) => {
  
    return {
        type: SET_AUTH,
        data: {
            id, email, login, isFetchin
        }
    }
}




export const HeaderTh = () => {
    return (dispatch) => {
      return headerAuth.auth()
            .then((val) => {
                if (val.resultCode !== 1) {
                    let { id, email, login } = val.data;
                    dispatch(setAuthMe(id, email, login, true));
                }
            })
    }
}



export const LoginRed = (data)=>{
 return (dispatch)=>{
    headerAuth.login(data.username, data.password, data.checkbox)
    .then(resultCode=>{
        if(resultCode === 0){
            dispatch(HeaderTh())
        }
    })
 }
}

export const OutLoginRed = ()=>{
    return (dispatch)=>{
       headerAuth. outLogin()
       .then(resultCode=>{
           if(resultCode === 0){
               dispatch(setAuthMe(null, null, null, false))
           }
       })
    }
   }
   

export default HeaderReducer;