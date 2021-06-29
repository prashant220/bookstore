import React, { useState, useEffect } from 'react'
import db from '../firebase/firebase'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Bookcards.css'





function Collection(props) {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
 

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
  <div>
      <h1 className="section-title" style={{textAlign:'center',marginTop:'5%',color:'black'}}>RECENTLY ADDED</h1>

    <div className="slider"  style={{marginTop:'10%'}}>
    
       

      {
        posts.map(post => (

          <Card className={classes.root} key={post.id} style={{ width: '100%' }} data-aos="fade-right" >
            <CardActionArea >
              <CardMedia
               
         className={classes.media}
                image={post.data.url}
                title=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{marginTop:'20px'}}>
                 <p> {post.data.title}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>Original Price:<s>{post.data.price}</s></p>
                  <p>Selling price:{post.data.selling}</p>

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>


            </CardActions>

          </Card>



        


        ))
      }






    </div>

    </div>
    
  )



}

export default withRouter(Collection)



