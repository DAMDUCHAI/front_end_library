
import React,{useEffect} from 'react';
import { GET_ALL_BOOK_SAGA,GET_BOOK_SAGA} from "../../redux/constant/libraryManager/bookConstant";
import { useSelector, useDispatch } from 'react-redux'

import FormViewBookDetaild from '../Modal/FormViewBookDetaild';
export default function ListBookReader() {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.bookReducers.bookList);

  
  
  useEffect(() => {
    

    dispatch({ type: GET_ALL_BOOK_SAGA })

}, [])

const renderBookList=()=>{
  return bookList.map((book,index)=>{
      return    <div key={index} className="snip1376 "><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg" alt="sample38" />
      <div>
        <h2>{book.Ten}</h2>
        <p>{book.NoiDung}</p>
        <div className="icons"  onClick={() => {
                        const action = {
                            type: 'OPEN_MODAL',
                            title:'View Detaild',
                            Component: <FormViewBookDetaild />,

                        }
                        dispatch(action)
             
                  
                        const action1 = {
                            type: GET_BOOK_SAGA,
                            idBook:book.id

                        }
                        dispatch(action1)
                        
                        }}
                       

                       
                        ><i className="ion-social-reddit-outline" />
        View Detaild
        </div>
      </div>
    </div>
  })}

  return (
    <div id='view-book'>
    <h2 style={{textAlign:'center',marginTop:'70px'}}>View book</h2>
<div style={{display: 'flex',flexFlow: 'row wrap' }}>

  {renderBookList()}

 


</div>



    </div>
  )
}
