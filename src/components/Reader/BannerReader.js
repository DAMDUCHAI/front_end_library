import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./readerStyle.css";
import {  useDispatch } from 'react-redux'
import FormViewStatusBook from "../Modal/FormViewStatusBook";
import FormAddFeedBack from "../Form/FeedBack/FormAddFeedBack";
import FormUpdateInformationReader from "../Form/Reader/FormUpdateInformationReader";
import {GET_READER_SAGA} from "../../redux/constant/libraryManager/readerConstants";
export default function BannerReader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '520' });



}, [])
  return (
    <div className="banner_top" id="home">
     
        <div className="header_agileits">
    
        <div className="nav-bar-reader">
        <a href="#view-book">View book</a>
        <a href="# "  
        onClick={()=>{
          const action = {
                            type: 'OPEN_MODAL',
                            title:'View Status',
                            Component: <FormViewStatusBook/>,

                        }
                        dispatch(action)

                        const action1 = {
                            type: 'GET_BORROW_BY_ID_ACOUNT_SAGA',
                        }
                        dispatch(action1)
          
        }}>View book status</a>
        <a href="# "     onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'Update Information',
                            Component: <FormUpdateInformationReader />,
                        }
                        dispatch(action);

                        const action1 = {
                            type: GET_READER_SAGA,
                           
                        }
                        dispatch(action1);
          
        }}>profile</a>
        <a href="# "  
        onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'FeddBack for Us',
                            Component: <FormAddFeedBack />,
                        }
                        dispatch(action);

               
          
        }}>feed back</a>
          <NavLink style={{ backgroundColor:'#ccc', padding:'5px 10px', borderRadius:'3px',color:'#000',position:'absolute',right:'50px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} to='/login'
        onClick={()=>{
        
          
        }}>Login</NavLink>
        </div>
        
          <div className="callbacks_container">
         
            
                <div className="banner-top2">
                  <div className="banner-info-wthree">
                    <h3>Library</h3>
                    <p>See how good they feel.</p>
                  </div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
}
