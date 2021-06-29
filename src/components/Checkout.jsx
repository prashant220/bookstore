import React,{useState,useEffect} from 'react'
import db from '../firebase/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Navigation  from './navigation'
import Topheader from './Topheader'
import './Cart.css'
import './Checkout.css'




function Cart(props) {


  

  const[posts,setPosts]=useState([])
  useEffect(()=>{
    db.collection("carts").onSnapshot((snapshot)=>
    setPosts(snapshot.docs.map((doc)=>({
        id:doc.id,data:doc.data()
    }))))
    
    
},[]) 
console.log(posts.length)



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
         <Topheader/>      
       <Navigation/>
      <h3 style={{textAlign:'center',marginTop:'5%',color:'#5CA9FB'}}>Checkout ({posts.length} items)</h3>
      
      <div className="delivery">
      <h3>Delivery address</h3>
      <p>Chabahil,kathmandu</p>
      </div>
      <h1 className="checkout-header">Review items and delivery</h1>
      <div className="slider" style={{marginTop:'10%'}}>

      {
        posts.map(post => (
         

          <Card className={classes.root} id="cards" key={post.id} style={{ width: '100%' }} >
           
           
            <CardActionArea >
              <CardMedia
                 
    
                
                 
                className={classes.media}
                image={post.data.image}
                title=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <p>{post.data.title}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="cart-para">Original Price: <s>{post.data.price}</s></p>
                  <p className="cart-para">Sellng price: {post.data.selling}</p>
                
                 
             
                
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
      export default Cart

  
  
   
  
    
   
    
         

