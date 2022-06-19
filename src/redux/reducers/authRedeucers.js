import { LOGIN,LOGOUT } from "../constant/libraryManager/authConstants";


const stateDefault = {
login:'Log Out'
}
const authReducers = (state = stateDefault,action) => {


    switch(action.type){

        case LOGIN: {
                state.login = action.login;
                
                return {...state};
        }
        case LOGOUT: {
        
            state.login = action.logout;
            return {...state}
    
        }


        default: return {...state}
    }
}

export default authReducers