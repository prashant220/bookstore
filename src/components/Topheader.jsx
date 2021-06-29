import React,{useEffect,useState} from 'react'
import db from '../firebase/firebase'
import './Topheader.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { withRouter } from 'react-router';
import Searchbar from './Searchbar'
import Log from './Log';
import { auth } from '../firebase/firebase';
import { useStateValue } from './Stateprovider'
import Dropdown from 'react-bootstrap/Dropdown'
import Category from './Category';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../logo.png'

function Topheader(props) {
    const[posts,setPosts]=useState([])
    const StyledBadge = withStyles((theme) => ({
        badge: {
            fontSize:12,
          right: 13,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }))(Badge);
    const Post=()=>{
        user?
        props.history.push("/post"):alert("login first")
    }
    const LogOut=()=>{
        auth.signOut()
       
    }
    useEffect(()=>{
        db.collection("carts").onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=>({
            id:doc.id,data:doc.data()
        }))))
        
        
    },[]) 
    console.log(posts.length)
    
    const[{user},dispatch]=useStateValue(null);
    const cartItem=()=>{
      
        props.history.push("/cart")
    }
    if({user}==null){
        var display=<p>hello user</p>
    }
     
    return (
        <div className="header-top">
           
            <div className="logo">
              BOOKSTORE
            </div>
            <div>
           <Searchbar />
            </div>
            <div className="top-icons">
                <Category/>
            <FavoriteBorderIcon style={{fontSize:'26px'}} /> 
            {/* <AddShoppingCartIcon style={{marginLeft:'20px',fontSize:'26px',marginRight:'20px'}} onClick={cartItem}/> */}
            
            <IconButton aria-label="cart">
  <StyledBadge badgeContent={posts.length} color="secondary" >
    <ShoppingCartIcon style={{marginLeft:'20px',fontSize:'26px',marginRight:'20px'}} onClick={cartItem} />
  </StyledBadge>
</IconButton>
            
            <Log/>
            <Dropdown style={{padding:'0px',marginLeft:'20px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic" >
  {
        !user? <p>hello user</p>:
        
        <p>Hello {user.displayName}</p>
  }
 
  </Dropdown.Toggle>

  <Dropdown.Menu >
    <Dropdown.Item >
        
            <p onClick={Post}>My post</p>
        
       
        
        
        </Dropdown.Item>
    <Dropdown.Item  ><p onClick={LogOut}>SignOut</p></Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
            </div>
            
        </div>
    )
}

export default withRouter(Topheader)

