import React from 'react'
import db from '../firebase/firebase';

function Sum() {
    const[posts,setPosts]=useState([])
  useEffect(()=>{
    db.collection("carts").onSnapshot((snapshot)=>
    setPosts(snapshot.docs.map((doc)=>({
        id:doc.id,data:doc.data()
    }))))
    
    
},[]) 
    return (
        <div>
              {
  
  posts.reduce((a,v) => 
   
 
 parseInt(a = a + v.data.selling ,0,
  
    )
   )
  
 
  
       }
       
          
        </div>
    )
}

export default Sum
