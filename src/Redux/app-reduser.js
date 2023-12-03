import { HeaderTh } from "./header-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';


let initial = {

    initialized: false,

}

export const AppReducer = (state = initial, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
      
            return { ...state, initialized: true }
        default:
            return state;
    }
}


export let initializedSucsess = () => (
    {
        'type': SET_INITIALIZED,
    })



    
export const InitialSucsses = () => {
    return (dispatch) => {
      let c = dispatch(HeaderTh());
      c.then((val)=>{
        
        dispatch(initializedSucsess())
      })
       
    }
}

