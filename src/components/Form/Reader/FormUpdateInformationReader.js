import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';

import { UPDATE_READER_INFOR_SAGA } from "../../../redux/constant/libraryManager/readerConstants";
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormUpdateInformationReader =(props)=> {


  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

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
  } = props;
 
  return (

    <>
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
  
  <div className="row">
    <div className="col-6"> 
    <label for="" className="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/></div>
         <div className="col-6"> 
    <label for="" className="form-label">Ngày Sinh</label>
    <input  type="date" className="form-control" name="NgaySinh"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgaySinh}/></div>
                <div className="col-6"> 
    <label for="" className="form-label">CCCD</label>
    <input  type="text" className="form-control" name="CCCD"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.CCCD}/></div>
                <div className="col-6"> 
    <label for="" className="form-label">Phone</label>
    <input  type="text" className="form-control" name="Phone"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone}/></div>
                <div className="col-6"> 
    <label for="" className="form-label">Địa Chỉ</label>
    <input  type="text" className="form-control" name="DiaChi"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi}/></div>
                <div className="col-6"> 
    <label  className="form-label">Giới tính</label>
    <select name="MaGioiTinh"  style={{width:'200px'}} className="form-control" onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaGioiTinh}>
      <option value="1" className="form-control">Nam</option>
      <option value="2" className="form-control">Nữ</option>
      <option value="3" className="form-control">Không Xác Định</option>
    </select>
   </div>
                <div className="col-6"> 
    <label  className="form-label">Ảnh</label>
    <input  type="file" className="form-control"  name="img"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.img}/></div>
     </div>

    </form>


    </>
  )
}
const formatDate=(dateString)=>{
  return dateString.substring(0, 10)
}

const UpdateInformationReaderWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { inforReader } = props;
  
  return { Ten:inforReader.Ten,DiaChi:inforReader.DiaChi,Phone:inforReader.Phone,CCCD:inforReader.CCCD,NgaySinh:formatDate(inforReader.NgaySinh),MaGioiTinh:inforReader.MaGioiTinh,img:''} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {

    props.dispatch({
      type:UPDATE_READER_INFOR_SAGA,
      readerUpdate:values,
      MaThongTinChung:props.MaThongTinChung
  })

  },

  displayName: "EditReaderWithFormik",
})(FormUpdateInformationReader);
const mapStateToProps = (state) => ({

  inforReader: state.readerReducers.inforReader,
  MaThongTinChung: state.readerReducers.MaThongTinChung

})
export default connect(mapStateToProps)(UpdateInformationReaderWithFormik);