import React,{useState} from 'react'
import './Topheader.css'
import JSONDATA from '../data/list.json'
import { withRouter } from 'react-router'
import './Searchbar.css'
import Navigation from './navigation'
import Topheader from './Topheader'

function Search(props) { 
   
    const[searchTerm,setSearchTerm]=useState({
        data:'',
        hide:false
    })
    return (
    
        <div className="formdiv">
            <Topheader/>
            <Navigation/>
    <input  onChange={(e)=> setSearchTerm({...searchTerm,['data']:e.target.value,['hide']:true})} type="text" id="myInput" placeholder="Search for names.."></input>

    
{
            JSONDATA.filter((val)=>{
                if(searchTerm.data==""){
                    
                }else if(val.title.toLowerCase().includes(searchTerm.data.toLowerCase()))
              
                
                
                {
                    return val
                }
            }).map((val,key)=>{
                return(
                    <div>
                      {
                          searchTerm.hide?
                          
                      
                          
                    <div className="cards" >
                      <ul id="myUL">
                    
                        <li id="myUL"      >
                        
                      
                  
                          <a  onClick={()=>props.history.push({
     
     pathname:`/searchresult`,
     state:{data:val}
     

   })} >
                         {val.title}</a>
                        
                    
                        </li>
                        </ul>

                     {console.log(val)}
                       
                    </div>
                      
                          
                          :<p></p>
                      }
                       
                        </div>
                )
            })
        }   
      
            
        </div>
    )
}

export default withRouter(Search)
