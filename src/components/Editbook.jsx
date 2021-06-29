import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import db from '../firebase/firebase'
import {storage}  from "../firebase/firebase";


const useStyles = makeStyles((theme) => ({


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

export default function Editbook({post}) {

  const [posts,setPosts]=useState([])
  
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>
    setPosts(snapshot.docs.map((doc)=>({
        id:doc.id,data:doc.data()
    }))))

},[])







    const[title,setTitle]=useState(post.data.title);
    const[author,setAuthor]=useState(post.data.author);
    const[price,setPrice]=useState(post.data.price);
    const[selling,setSelling]=useState(post.data.selling);


 

    const handleSubmit=(e)=>{
       
   
      e.preventDefault()
    db.collection("posts").doc(post.id).update({
      title:title,
      author:author,
     price:price,
      selling:selling,
    //   image:url
       
    
})

setOpen(true);


    
  }

    

    
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <button id="edit-button" type="button" onClick={handleOpen}>
       Edit
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
       <form onSubmit={handleSubmit}>
    
    
     
          
         <label htmlFor="">Title</label>
           <input type="text" defaultValue={title} onChange={(e)=>setTitle(e.target.value)} /> <br></br>
           <label htmlFor="">Name</label>
           <input type="text"defaultValue={author} onChange={(e)=>setAuthor(e.target.value)} /><br></br>
           <label htmlFor="">Actual Price</label>
           <input type="number"defaultValue={price}onChange={(e)=>setPrice(e.target.value)}  /><br></br>
           <label htmlFor="">Selling Price</label>
           <input type="number"defaultValue={selling} onChange={(e)=>setSelling(e.target.value)}  /><br></br>
          
      
      
         
           {/* <input type="file" onChange={(e)=>
      
          
              {
                if (e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }
          
          
          } /> */}
           <button  type="submit">Post</button>
       </form>
      
          
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

