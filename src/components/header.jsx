import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import './Type.css'
import Searchbar from './Searchbar'


export const Header = (props) => {
  
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {/* {props.data ? props.data.title : 'Loading'} */}
                  <div className="typewritter" > 

                  <Typewriter
      string='buy and sell books'
      delay={200}
      stopBlinkinOnComplete
    />
  
   
 
     </div>
    
     
                  <span></span>
                </h1>
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
