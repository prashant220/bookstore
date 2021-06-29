import { withRouter } from "react-router"
import './Navigation.css'

const  Navigation = (props) => {
  return (
    // <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    <nav id="menu">
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' onClick={()=>props.history.push("/")}>
            BOOKSTORE
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
         
            <li>
              <a href='#features' id="nav-a" className='page-scroll'>
                Categories
              </a>
            </li>
            <li>
              <a href='#about' id="nav-a" className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' id="nav-a" className='page-scroll'>
                Recent Uploads
              </a>
            </li>
            <li>
              <a href='#portfolio' id="nav-a" className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' id="nav-a" className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' id="nav-a" className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' id="nav-a" className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Navigation)