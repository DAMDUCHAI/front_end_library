import { all } from "redux-saga/effects";
import * as bookSaga from './libraryManageSagas/bookSagas'
import * as authorSaga from './libraryManageSagas/authorSagas'
import * as bookshelfSaga from './libraryManageSagas/bookshelfSagas'
import * as publisherSaga from './libraryManageSagas/publisherSagas'
import * as categorySaga from './libraryManageSagas/categorySagas'
import * as readerSaga from './libraryManageSagas/readerSaga'
import * as genderSaga from './libraryManageSagas/genderSaga'
import * as borrowSagas from './libraryManageSagas/borrowSagas'
import * as acountSaga from './libraryManageSagas/acountSaga'
import * as feedBackSaga from './libraryManageSagas/feedBackSaga'
export function* rootSagas() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist
    bookSaga.followGetListBookSaga(),
    bookSaga.followDeleteBookSaga(),
  bookSaga.followUpdateBookSaga(),
  bookSaga.followCreateBookSaga(),
    authorSaga.followGetListAuthorSaga(),
    authorSaga.followCreateAuthorSaga(),
    authorSaga.followUpdateAuthorSaga(),
    authorSaga.followDeleteAuthorSaga(),
    bookshelfSaga.followGetListBookshelfSaga(),
    publisherSaga.followGetListPublisherSaga(),
    publisherSaga.followCreatePublisherSaga(),
    publisherSaga.followDeletePublisherSaga(),
    publisherSaga.followUpdatePublisherSaga(),
    categorySaga.followGetListCategorySaga(),
    categorySaga.followCreateCategorySaga(),
    categorySaga.followUpdateCategorySaga(),
    categorySaga.followDeleteCategorySaga(),
    bookSaga.followCreateBookCardSaga(),
    bookSaga.followCreateBorrowBookSaga(),

    readerSaga.followGetListReaderSaga(),
    readerSaga.followCreateReaderSaga(),
    readerSaga.followUpdateReaderSaga(),
    
    genderSaga.followGetListGenderSaga(),

    borrowSagas.followGetBookByReaderSaga(),
    
    acountSaga.followloginAcount(),
    bookSaga.followGetBookSaga(),

    borrowSagas.followGetBorrowBookByIdAcountSaga(),
    feedBackSaga.followCreateFeedbackSaga(),
    readerSaga.followGetReaderSaga(),
    readerSaga.followUpdateInforReaderSaga(),
    feedBackSaga.followGetListFeedbackSaga(),
    feedBackSaga.followUpdateTrangThaiSaga(),
  ])

  
}