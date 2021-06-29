
import React,{useState,useEffect} from 'react'
import db from '../firebase/firebase'
import Avatar from '@material-ui/core/Avatar';
import './Post.css'
import {withRouter} from 'react-router-dom'
import  Navigation  from './navigation'
import Topheader from './Topheader';
import { useStateValue } from './Stateprovider'
import './Topheader.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Searchbar from './Searchbar'
import Dropdown from 'react-bootstrap/Dropdown'
import { auth } from '../firebase/firebase';
import TransitionsModal from './TransitionsModal';
import Mybooks from './Mybooks';






function Post(props){
  const cartItem=()=>{
      
    props.history.push("/cart")
}
const LogOut=()=>{
  auth.signOut()
  props.history.push("/")
 
}
  const[signedIn,setSignedIn]=useState(false)
  const[{user},dispatch]=useStateValue(null);
  if({user}==null){
    var display=<p>hello user</p>
}
 
  
  const[posts,setPosts]=useState([])
  useEffect(()=>{
      db.collection("posts").onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
          id:doc.id,data:doc.data()
      }))))
      
      
  },[]) 
  console.log(posts)
  console.log(posts.length)

  
    return (
      <div>
       <div className="header-top">
           
           <div className="logo">LOGO</div>
           <div>
          <Searchbar/>
           </div>
           <div className="top-icons">
      
    
          <TransitionsModal/>
           <Dropdown>
 <Dropdown.Toggle variant="success" id="dropdown-basic">
 {
       !user? <p>hello user</p>:
       
       <p>Hello {user.displayName}</p>
 }

 </Dropdown.Toggle>

 <Dropdown.Menu>
   <Dropdown.Item ><p onClick={Post}>My post</p></Dropdown.Item>
   <Dropdown.Item  ><p onClick={LogOut}>SignOut</p></Dropdown.Item>
 
 </Dropdown.Menu>
</Dropdown>
           </div>
           
       </div>
     <Navigation/>

      <div className="user-info">
        <div className="user-section">
        <Avatar alt="Remy Sharp" src="" style={{width:'50px',height:'50px'}} />
        {
        !user? <p style={{marginTop:'10px'}}> Hello </p>:
        
        <p style={{marginTop:'10px'}}>Hello {user.displayName}</p>
  }
      

        </div>

        <div className="book-posted">
          <p>Book Posted</p>
          <div className="posted-box">
           <p className="post-number">
              {posts.length}</p>
          </div>
        

        </div>
     



      </div>
   
      <h1 style={{textAlign:'center',marginTop:'60px'}}>My Books</h1>
     
       <Mybooks/>
  
        
      
      </div>
      
    );
    
  };
  
  export default withRouter(Post);