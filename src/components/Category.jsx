import React from 'react'
import {withRouter} from 'react-router-dom'
import './Category.css'

function Category(props) {
    const bestSeller=()=>{
        props.history.push('/best')
    }
    const romance=()=>{
        props.history.push('/romance')
    }
    const classic=()=>{
        props.history.push('/classic')
    }
    return (
        <div style={{marginRight:'10px'}}>
            <select id="cars" name="carlist" form="carform">
            <option value="saab">SELECT CATEGORIES</option>

  <option value="volvo" onClick={bestSeller}>
      BEST SELLER
      
      
      </option>
  <option value="saab"  onClick={romance}>ROMANCE</option>
  <option value="opel"  onClick={classic}>CLASSICS</option>
  <option value="audi">ACTIONS</option>
</select>

        </div>
    )
}

export default withRouter(Category)
