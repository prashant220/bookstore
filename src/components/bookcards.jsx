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





function Bookcards(props) {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
 

  const [recent, setRecent] = useState([])

  useEffect(() => {
    db.collection("recent").onSnapshot((snapshot) =>
      setRecent(snapshot.docs.map((doc) => ({
        id: doc.id, data: doc.data()
      }))))


  }, [])
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


    <div className="slider">

      {
        recent.map(recents => (

          <Card className={classes.root} id="cards" key={recents.id} style={{ width: '100%' }} data-aos="fade-right">
            <CardActionArea >
              <CardMedia
                   onClick={()=>props.history.push({

                    pathname:`/recent`,
                    state:{recent:recents.data}
                    
    
                  })} 
                 
                className={classes.media}
                image={recents.data.image}
                title=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{marginTop:'20px'}}>
                 <p> {recents.data.title}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>Original Price:<s>{recents.data.price}</s></p>
                  <p>Selling price:{recents.data.selling}</p>

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>


            </CardActions>

          </Card>



        


        ))
      }






    </div>

    
    
  )



}

export default withRouter(Bookcards)



