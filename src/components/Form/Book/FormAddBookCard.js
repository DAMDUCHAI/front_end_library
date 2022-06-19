import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOOK_CARD_SAGA} from "../../../redux/constant/libraryManager/bookConstant";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddBookCard =(props)=> {


  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

        //Gọi api load project category 
    
      

        
        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      setValues,
      setFieldValue
  } = props;
    const authorList = useSelector(state => state.authorReducers.authorList);
    const categortList = useSelector(state => state.categoryReducers.categoryList);
    const bookshelfList = useSelector(state => state.bookshelfReducers.bookshelfList);
    const publisherList = useSelector(state => state.publisherReducers.publisherList);









  return (

    <>
    <form onSubmit={handleSubmit}>
  
  <div className="row">
    <div className="col-12"> 
    <label for="" className="form-label">Mã thẻ</label>
    <input type="text" className="form-control" name="MaThe"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaThe}/></div>
     <div className="col-12"> 
    <label for="" className="form-label">Hạn Trả</label>
    <input type="date" className="form-control" name="HenTra"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.HenTra}/></div>
  </div>
  <div className="row">
  <div className="col-12"> 
    <label for="" className="form-label">Số Lượng Mượn</label>
    <input type="number" className="form-control" name="SoLgMuonMax"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.SoLgMuonMax} /></div>

    </div>


   
    

    </form>


    </>
  )
}


const AddBookCardWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
  return {MaThe:'',HenTra:'',SoLgMuonMax:'' } 
},



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_BOOK_CARD_SAGA,
      bookCardCreate:values,
  })
  },

  displayName: "FormAddBookCard",
})(FormAddBookCard);

export default connect()(AddBookCardWithFormik);