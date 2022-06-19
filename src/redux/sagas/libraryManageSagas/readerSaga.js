import { call, put, takeLatest,delay } from "redux-saga/effects";
import { ReaderServices } from "../../../services/readerServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_READER,GET_ALL_READER_SAGA,CREATE_READER_SAGA,UPDATE_READER_SAGA,UPDATE_READER_INFOR_SAGA ,GET_READER_SAGA,UPDATE_INFOR_READER,UPDATE_MA_THONG_TIN_CHUNG} from "../../constant/libraryManager/readerConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { InformationCommonServices } from "../../../services/informationCommonServices";
import { LibraryCardServices } from "../../../services/libraryCardServices";
import { AcountServices } from "../../../services/acountServices";




function *getListReaderSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => ReaderServices.getAllReader());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_READER,
                readerList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListReaderSaga() {
    yield takeLatest(GET_ALL_READER_SAGA, getListReaderSaga);
}



//Create category
function* createReaderSaga(action) {

    try {
        const information = yield call(() => InformationCommonServices.createInformationCommon(action.values));
    
        const acount = yield call(() => AcountServices.createAcount(action.values));
const libraryCard = yield call(() => LibraryCardServices.createLibraryCard(action.values));


const readerCreate={
    MaThongTinChung:information.data.id,
    MaAcount:acount.data.id,
    MaThe:libraryCard.data.id
};

        const { data, status } = yield call(() => ReaderServices.createReader(readerCreate));
        notifiFunction('success','Add reader successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            notifiFunction('success','Add reader successfully !')
            
        }
    

        yield put({
            type:'CLOSE_DRAWER'
        })
  
        yield call(getListReaderSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateReaderSaga() {
    yield takeLatest(CREATE_READER_SAGA, createReaderSaga);
}



//Update Category
function* updateReaderSaga(action) {
   
    try {

     
        const updateThongTin = yield call(() => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.readerUpdate))
        const updateTheThuVien = yield call(() => LibraryCardServices.updateLibraryCard(action.MaThe,action.readerUpdate))
        const updateAcount = yield call(() => AcountServices.updateAcount(action.MaAcount,action.readerUpdate));


        if (updateThongTin.status === STATUS_CODE.SUCCESS && updateTheThuVien.status === STATUS_CODE.SUCCESS&&updateAcount.status === STATUS_CODE.SUCCESS
            ) {
            notifiFunction('success','Update reader successfully !')

      
        }
        else {
            notifiFunction('error','Update reader fail !')
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListReaderSaga);
    } catch (err) {
        console.log(err);
        notifiFunction('error','Update reader fail !')
    }
   

}


export function* followUpdateReaderSaga() {
    yield takeLatest(UPDATE_READER_SAGA, updateReaderSaga);
}





function* getReaderSaga(action) {
     


        try {
            yield put({
                type: DISPLAY_LOADING
            })
            yield delay (500);
            const id=localStorage.getItem('id_user');
            
            const {data,status} = yield call( () => ReaderServices.getReader(id));
           
       
         if(status === STATUS_CODE.SUCCESS) {
                yield put({
                    type:UPDATE_INFOR_READER,
                    inforReader:data
                })
                yield put({
                    type:UPDATE_MA_THONG_TIN_CHUNG,
                    MaThongTinChung:data.id
                })
                yield put({
                    type: HIDE_LOADING
                })
            }
        }catch(err) {
            console.log(err)
        }
       
    
 

   

}


export function* followGetReaderSaga() {
    yield takeLatest(GET_READER_SAGA, getReaderSaga);
}





function* updateInforReaderSaga(action) {
     
    try {
   console.log('fiasfhjcj :',action.readerUpdate);
  
        const {data,status} = yield call( () => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.readerUpdate));

   
        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Update infor reader successfully !')
  
        
        }
         
   
            yield put({
                type:'CLOSE_DRAWER'
            })
    }catch(err) {
        console.log(err)
    }
   





}


export function* followUpdateInforReaderSaga() {
yield takeLatest(UPDATE_READER_INFOR_SAGA, updateInforReaderSaga);
}









