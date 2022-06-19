import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { FeedbackServices } from "../../../services/feedBackServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import {CREATE_FEEDBACK_SAGA ,GET_ALL_FEEDBACK_SAGA,GET_ALL_FEEDBACK,UPDATE_TRANGTHAI_FEEDBACK_SAGA,VIEW_FEEDBACK} from "../../constant/libraryManager/feedBackConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";


//Create category
function* createFeedBackSaga(action) {

    try {

        console.log(action.categoryCreate);
        const { data, status } = yield call(() => FeedbackServices.createFeddBack(action.feedBackCreate));
        notifiFunction('success','Send successfully !')




    
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
 
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateFeedbackSaga() {
    yield takeLatest(CREATE_FEEDBACK_SAGA, createFeedBackSaga);
}







function *getListFeedback(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => FeedbackServices.getAllFeddBack());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_FEEDBACK,
                feedbackList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        }
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListFeedbackSaga() {
    yield takeLatest(GET_ALL_FEEDBACK_SAGA, getListFeedback);
}



function* updateTrangThaiSaga(action) {
    
    try {

        
        const { data, status } = yield call(() => FeedbackServices.updateFeddBack(action.id));
          

     
    
   
        yield put({
            type:VIEW_FEEDBACK,
            feedback:{TieuDe:data.TieuDe,NoiDung:data.NoiDung},
        })
        yield call(getListFeedback);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateTrangThaiSaga() {
    yield takeLatest(UPDATE_TRANGTHAI_FEEDBACK_SAGA, updateTrangThaiSaga);
}


