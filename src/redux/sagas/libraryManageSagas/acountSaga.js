import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { AcountServices } from "../../../services/acountServices";
import { history } from "../../../util/history";
import { STATUS_CODE } from "../../../util/constants/settingSystem";








// function *getListAcount(action) { 
//     try {

//         const {data,status} = yield call( () => AcountServices.getAllAcount());
     
   
//      if(status === STATUS_CODE.SUCCESS) {
//             yield put({
//                 type:GET_ALL_ACOUNT,
//                 categoryList:data
//             })
          
//         }
//     }catch(err) {
//         console.log(err)
//     }

// }

// export function* followGetListAcount() {
//     yield takeLatest(GET_ALL_ACOUNT_SAGA, getListAcount);
// }






//login
function* loginAcount(action) {

    try {



        const { data, status } = yield call(() => AcountServices.loginAcount(action.loginCreate));
             if (status === STATUS_CODE.SUCCESS) {
  
            
            localStorage.setItem("token", data.token);
            localStorage.setItem("id_user", data.id);
if(data.Role==='USER'){
    history.push('/home');
}else{
    history.push('/book-manager');
}
           
        }
   
  

    } catch (err) {
        console.log(err);
    }
   

}


export function* followloginAcount() {
    yield takeLatest('LOGIN_ACOUNT_SAGA', loginAcount);
}



// //Update Category
// function* updateAcount(action) {

//     try {

        
//         const { data, status } = yield call(() => AcountServices.updateAcount(action.idCategory,action.categoryUpdate));

//         if (status === STATUS_CODE.SUCCESS) {
//             console.log(data)

//             // history.push('/projectmanagement');
//         }
    
   
    

//     } catch (err) {
//         console.log(err);
//     }
   

// }


// export function* followUpdateAcount() {
//     yield takeLatest(UPDATE_ACOUNT_SAGA, updateAcount);
// }





// //delete category by id
// function *deleteAcount(action) { 
//     try {
//         const { data, status } = yield call(() => AcountServices.deleteAcount(action.id));
     
   
//     //  if(status === STATUS_CODE.SUCCESS) {
//         console.log(action.id)

//         // }

  
//     }catch(err) {
        
//         console.log(err)
     
//     }

// }

// export function* followDeleteAcount() {
//     yield takeLatest(DELETE_ACOUNT_SAGA, deleteAcount);
// }






