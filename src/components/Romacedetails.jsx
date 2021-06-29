import React,{useState,useEffect} from 'react'
import Navigation from './navigation';
import db from '../firebase/firebase';
import Topheader from './Topheader';
import { useStateValue } from './Stateprovider'


function Romancedetails(props) {
	const[{user},dispatch]=useStateValue(null);
    const[title,setTitle]=useState(" ");
    const[author,setAuthor]=useState(" ");
    const[price,setPrice]=useState(" ");
    const[selling,setSelling]=useState(" ");
    const[image,setImage]=useState(" ");
    const [progress, setProgress] = useState(0);
    
    const[cart,setCart]=useState("")
  
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        db.collection("carts").onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=>({
            id:doc.id,data:doc.data()
        }))))
        
        
    },[]) 
  
    
  const addtoCart=()=>{
	!user?
	
	alert("login first"):
	   
   
    db.collection("carts").add({
      title:props.location.state.best.title,
      author:props.location.state.best.author,
     price:props.location.state.best.price,
    selling:props.location.state.best.selling,
    image:props.location.state.best.image,
   
    
   
  }) 
  
  }
  
    
  
    
    return (
        <div>
             <Topheader/>
              <Navigation/>
              <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={props.location.state.best.image} /></div>
						 
						 
						</div>
					
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{props.location.state.best.title}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no"><i>By:-{props.location.state.best.author}</i></span>
						</div>
						<p class="product-description">{props.location.state.best.description}</p>
						<h4 class="price">Original price: <span><s>{props.location.state.best.price}</s></span></h4>
						<h4 class="price">current price: <span>{props.location.state.best.selling}</span></h4>
						
	
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button" onClick={addtoCart    }>add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div> 
        </div>
    )
}

export default Romancedetails
