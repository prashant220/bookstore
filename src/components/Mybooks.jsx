import React,{useState,useEffect} from 'react'
import './Mybooks.css'
import {  withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import db from '../firebase/firebase'
import Editbook from './Editbook';


function Mybooks(props) {
   
  const[posts,setPosts]=useState([])
  useEffect(()=>{
      db.collection("posts").onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
          id:doc.id,data:doc.data()
      }))))
     
      
  },[])  
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles();
    return (
        
        <div className="book-info">
          
       {
         posts.map(post=>(
           
 <Card className={classes.root} id="cards" key={post.id} style={{width:'100%'}} >
            <CardActionArea >
              <CardMedia
             
              onClick={()=>props.history.push({

                pathname:`/bookdescription/${post.id}`,
                state:{post:post.data}
                

              })} 
             

                className={classes.media}
                image={post.data.url} 
                title=""
              />
              <CardContent>
             
                <Typography gutterBottom variant="h5" component="h2">
                 <p> Title: {post.data.title}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>Original Price:<s>{post.data.price}</s></p>
                  <p>Selling Price:{post.data.selling}</p>
      
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                  <Editbook post={post} />    
              <Button id="edit-button" size="small" color="primary" onClick={()=>db.collection("posts").doc(post.id).delete()}>
                Delete
              </Button>
            </CardActions>
            
          </Card> 
           
         

        
     
	  

         ))

       }
            
        
    
           
          
        </div>
   
    )
}

export default withRouter(Mybooks)



