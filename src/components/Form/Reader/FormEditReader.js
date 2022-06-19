import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {UPDATE_READER_SAGA} from '../../../redux/constant/libraryManager/readerConstants'
import {GET_ALL_GENDER_SAGA} from "../../../redux/constant/libraryManager/genderConstants";
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditReader =(props)=> {


  const dispatch = useDispatch();
     

      //componentdidmount
      useEffect(() => {

        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
        dispatch({ type: GET_ALL_GENDER_SAGA })
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
  } = props;

  const listGender=useSelector(state => state.genderReducers.genderList);

  const renderOptionGender=()=>{
    return listGender.map((gender,index)=>{
      return  <option key={index} value={gender.id}>
      {gender.NoiDung}
  </option>
    })
  }
  
  return (

    <>
    <form onSubmit={handleSubmit}>
  
  <div className="row">
    <div className="col-6"> 
    <label for="" class="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/></div>
     <div className="col-6"> 
    <label for="" class="form-label">Email</label>
    <input type="text" className="form-control" name="Email"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}/></div>

  
  <div className="col-6"> 
    <label for="" class="form-label">Dia Chi</label>
    <input type="text" className="form-control" name="DiaChi"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi} /></div>
    <div className="col-6"> 
    <label for="" class="form-label">Phone</label>
    <input type="text" className="form-control" name="Phone"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone} /></div>

  <div className="col-6"> 
    <label for="" class="form-label">CCCD</label>
    <input type="text" className="form-control" name="CCCD" onChange={handleChange}
        onBlur={handleBlur}
        value={values.CCCD} /></div>
    


  <div className="col-6"> 
  <div>
  <label htmlFor="">Ngày Sinh</label>
  <input type="date" className="form-control" name="NgaySinh" onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgaySinh} />
</div>

  </div>
  

  <div className="col-6"> 
  <div>
  <label htmlFor="">Gioi Tinh</label>
  <select className="form-control" name="MaGioiTinh" value={values.MaGioiTinh} onChange={handleChange}>
                            {renderOptionGender()}
                        </select>
</div>

  </div>

  <div className="col-6"> 
    <label for="" className="form-label">Mã Thẻ Sinh Viên</label>
    <input type="text" className="form-control" name="MaSinhVien" onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaSinhVien} /></div>


<div className="col-6"> 
    <label for="" className="form-label">Ngày Cấp</label>
    <input type="date" className="form-control" name="NgayCap" onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgayCap} /></div>

<div className="col-6"> 
    <label for="" className="form-label">HSD</label>
    <input type="date" className="form-control" name="HSD" onChange={handleChange}
        onBlur={handleBlur}
        value={values.HSD} /></div>
  </div>

    </form>


    </>
  )
}

const formatDate=(dateString)=>{
  return dateString.substring(0, 10)
}

const EditReaderWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { readerEdit } = props;

  return {MaSinhVien:readerEdit.MaSinhVien, NgaySinh:formatDate(readerEdit.NgaySinh),Ten:readerEdit.Ten,DiaChi:readerEdit.DiaChi,Phone:readerEdit.Phone,Email:readerEdit.Email,CCCD:readerEdit.CCCD,MaGioiTinh:readerEdit.MaGioiTinh,HSD: formatDate(readerEdit.HSD),NgayCap:formatDate(readerEdit.NgayCap)} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    console.log('values',values);
    props.dispatch({
      type:UPDATE_READER_SAGA,
      readerUpdate:values,
      MaThongTinChung:props.readerEdit.MaThongTinChung,
      MaAcount:props.readerEdit.MaAcount,
      MaThe:props.readerEdit.MaThe,
      
  })
 
  },

  displayName: "  EditReaderForm",
})(FormEditReader);
const mapStateToProps = (state) => ({


  readerEdit:state.readerReducers.readerEdit
})
export default connect(mapStateToProps)(EditReaderWithFormik);