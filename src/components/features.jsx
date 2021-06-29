
import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";



export const Features = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  return (
    <div id='features' className='text-center' data-aos="fade-up">
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Categories</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
