import React from 'react'

import { Button } from '@material-ui/core'
import {auth,google,facebook} from '../firebase/firebase';
import { useStateValue } from './Stateprovider'
import { actionTypes } from './reducer'
import db from '../firebase/firebase'
import { Dns } from '@material-ui/icons';
import { withRouter } from 'react-router';

function Login(props) {
    const[{user},dispatch]=useStateValue();
   
    const signIn=()=>{
        auth.signInWithPopup(google)
     
      
        .then((result)=>{
         
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
        
            });
        })
        .catch((error)=>{
            alert(error.message)
        })
  
    }
    const sign=()=>{
        auth.signInWithPopup(facebook)
      
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            props.history.push("/post")
        })
        .catch((error)=>{
            alert(error.message)
        })

    }
    return (
        <div className="login" style={{marginLeft:'40px',marginTop:'20px',}}>
            
            <Button type="submit" onClick={signIn} style={{fontSize:'13px',marginBottom:'20px',border:'1px solid grey',marginLeft:'17px'}} >
                Sign in with Google
            </Button>
            <Button type="submit" onClick={sign} style={{fontSize:'13px',border:'1px solid grey',marginLeft:'15px'}}  >
                Sign in with Facebook
            </Button>
    
            
        </div>
    )
}

export default withRouter(Login)

