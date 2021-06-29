import React, {useRef,useState} from 'react'
import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {withRouter} from 'react-router-dom'
import {auth} from '../firebase/firebase'
import './Log.css'

// import Firelogin from './Firelogin'
import { Link } from 'react-router-dom'
import Login from './Login';

const useStyles = makeStyles((theme) => ({
 button:{
  padding: '5px 12px',
  letterSpacing:'1px',
  margin:'0',
  fontSize:'14px',
  borderRadius:'25px',
  transition: 'all 0.5s linear',
    border: '0',
    color: '#fff',
    backgroundImage:'none',
    backgroundColor:'#5ca9fb',
    textTransform:'uppercase'
    



 },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
   function Log(props) {
       const[inside,setInside]=useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn = e => {
        e.preventDefault();
        setInside(true)
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
   
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   if(inside){
       props.history.push("/post")
   }
    console.log(inside)
  
    return (
      <div>
        <button  type="button" className={classes.button} onClick={handleOpen}>
        Sign in
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
         
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
                <div className="signin">
            <form action="">
                <h1 className="sign-head">Sign in</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}  style={{padding:'5px',fontSize:'13px'}}>Sign in </button>
                <h6 style={{marginLeft:'46px',marginTop:'20px'}}>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
             
            
              
            </form>
            <Login/>
            </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  
  export default withRouter(Log)

