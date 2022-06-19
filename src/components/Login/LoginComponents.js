import React from "react";
import { withFormik } from "formik";
import { connect  } from "react-redux";
import { Input, Button,  } from "antd";
import {
  MailOutlined,
  LockOutlined,
  
} from "@ant-design/icons";
import * as Yup from 'yup';



const LoginComponents = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form
      style={{ width: "50%", margin: "0 auto", marginTop: "20%" }}
      onSubmit={handleSubmit}
    >
      <h1>Login Library</h1>

{touched.Email && errors.Email ? (
  <div className="text-danger">{errors.Email}</div>
       ) : null}      <Input
        prefix={<MailOutlined className="site-form-item-icon" />}
        placeholder="Email"
        className="mb-2"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}
        name="Email"
      />


{touched.PassWord && errors.PassWord ? (
  <div className="text-danger">{errors.PassWord}</div>
       ) : null}
      <Input
      
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.PassWord}
        name="PassWord"
        className="mb-2"
      />
 <a >Forgot password</a>
<div className="mt-3">
  
<Button
        type="primary"
        htmlType="submit"
        className="login-form-button mr-3"
      >
        Log in
      </Button>
 
</div>
    </form>
  );
};

const LoginWithFormik = withFormik({
  mapPropsToValues: () => ({ Email: "", PassWord: "" }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    Email:Yup.string().required('Email is required!').email('Email is invalid!'),
    PassWord:Yup.string().min(6,'Password must have min 6 characters').max(32,'PassWord  have max 32 characters')

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    setSubmitting(true);
    props.dispatch({
      type: 'LOGIN_ACOUNT_SAGA',
      loginCreate:values
    })
    
     
  },

  displayName: "BasicForm",
})(LoginComponents);
export default connect()(LoginWithFormik);
