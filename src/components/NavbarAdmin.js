import {React,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
export default function NavbarAdmin() {
  const  login = useSelector(state => state.authReducers.login);
  return (
    <Fragment>

<div className="container-fluid" style={{backgroundColor: '#1e272e',position: 'fixed',zIndex:999}}>
<div className="row d-flex align-items-center">
  <div className="col-3 d-flex align-items-center">
  <i className="fas fa-bars text-white" ></i>
  <h5 className="ml-4 mt-2 text-white">Library Manager</h5>
    </div>
  <div className="col-6">
  <form className="navbar-search" style={{width:'100%'}}>
    <input type="text" name="Search" className="navbar-search-input" placeholder="What you looking for..." />
   
    <i className="fas fa-search" />
  </form>
    </div>
    <div className="col-3">
    <img src={require('../assets/imgProfile/imgProfile.jpg')} alt="User image" style={{borderRadius:'65%',width:'25px',marginLeft:'100px'}}/>


<NavLink 
style={{backgroundColor:'#ccc', padding:'5px 10px', borderRadius:'3px',color:'#000', marginLeft:'40px',}} to="/login">{login}</NavLink>


    </div>

</div>
</div>
</Fragment>
  )
}
