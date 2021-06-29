import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import db from '../firebase/firebase'
import {storage}  from "../firebase/firebase";
import firebase from 'firebase';


const useStyles = makeStyles((theme) => ({

button:{
  color: '#fff',
backgroundColor: '#5ca9fb',
padding: '5px 5px',
marginRight: '30px',

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

export default function TransitionsModal() {
 
    const[title,setTitle]=useState(" ");
    const[author,setAuthor]=useState(" ");
    const[price,setPrice]=useState(" ");
    const[selling,setSelling]=useState(" ");
    const [image, setImage] = useState(null);
    const[photo,setPhoto]=useState(null)
    const [url, setUrl] = useState(""); 
    const [progress, setProgress] = useState(0);

  



    const handleSubmit=(e)=>{
      
   

      console.log(url);
      
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
             
            });
      
        }
      );
      e.preventDefault();
      db.collection("posts").add({
        title:title,
        author:author,
       price:price,
        selling:selling,
        url:url
        
      })
    

  }
  console.log(url);

 console.log(image)
  
  
  


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
      <button className={classes.button} type="button" onClick={handleOpen}>
       Post Book
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
       
           <label   htmlFor="">Title</label>
           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br></br>
           <label htmlFor="">Name</label>
           <input type="text"value={author} onChange={(e)=>setAuthor(e.target.value)} /><br></br>
           <label htmlFor="">Actual Price</label>
           <input type="number"value={price}onChange={(e)=>setPrice(e.target.value)}  /><br></br>
           <label htmlFor="">Selling Price</label>
           <input type="number"value={selling} onChange={(e)=>setSelling(e.target.value)}  /><br></br>
           <input type="file" onChange={(e)=>
   {
      if (e.target.files[0]) {
  setImage(e.target.files[0]);
}
   }
 

           } />
           
        
           <button style={{marginTop:'15px',padding:'0 20px'}}  type="submit">Post</button>
       </form>
      
          
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

