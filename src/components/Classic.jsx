import React,{useState,useEffect} from 'react'
import db from '../firebase/firebase'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './navigation'
import Topheader from './Topheader';


function Bestseller(props) {

    const [best, setBest] = useState([])
 

  useEffect(() => {
    db.collection("classics").onSnapshot((snapshot) =>
      setBest(snapshot.docs.map((doc) => ({
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
        <div>
            <Topheader/>
           <Navigation/>


        <div className="slider" style={{marginTop:'10%'}}>
             {
        best.map(bests => (

          <Card className={classes.root} id="cards" key={bests.id} style={{ width: '100%' }} data-aos="fade-right">
            <CardActionArea >
              <CardMedia
                   onClick={()=>props.history.push({

                    pathname:`/best/${best.id}`,
                    state:{best:bests.data}
                    
    
                  })} 
                 
                className={classes.media}
                image={bests.data.image}
                title=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {bests.data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p><s>{bests.data.price}</s></p>
                  <p>{bests.data.selling}</p>

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

export default Bestseller
