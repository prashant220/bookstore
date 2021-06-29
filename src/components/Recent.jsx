import React,{useState,useEffect} from 'react'
import  Navigation  from './navigation'
import Topheader from './Topheader'
import './Recent.css'
import db from '../firebase/firebase'
import { useStateValue } from './Stateprovider'

  
function Recent(props) {
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
    title:props.location.state.recent.title,
    author:props.location.state.recent.author,
   price:props.location.state.recent.price,
  selling:props.location.state.recent.selling,
  image:props.location.state.recent.image,


  
 
})   
alert("added to cart")

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
						  <div class="tab-pane active" id="pic-1"><img src={props.location.state.recent.image} /></div>
						 
						 
						</div>
					
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{props.location.state.recent.title}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no"><i>By:-{props.location.state.recent.author}</i></span>
						</div>
						<p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 class="price">Original price: <span><s>{props.location.state.recent.price}</s></span></h4>
						<h4 class="price">current price: <span>{props.location.state.recent.selling}</span></h4>
						
	
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button" onClick={addtoCart} >add to cart</button>
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

export default  Recent


