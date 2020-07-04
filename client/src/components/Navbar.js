import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = ()=>{
        if(state){
            return[
                <li key="2"><Link to="/profile">Profile</Link></li>,
                <li key="3"><Link to="/create">Create Post</Link></li>,
                <li key="4"><Link to="/myfollowingpost">My following Post</Link></li>,
                <li key="5">
                <button className="btn waves-effect waves-light #1976d2 blue darken-2"
                onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history.push('/signin')
                }}>
                Logout</button>  
                </li>
            ]            
        }
        else{
            return[
                <li key="6"><Link to="/signin">Signin</Link></li>,
                <li key="7"><Link to="/signup">Signup</Link></li>    
            ]
        }
    }
    return( 
        <nav>
        <div className="nav-wrapper white">
            <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right">
            {renderList()}
            </ul>
        </div>
        </nav>
    
    )
}

export default NavBar