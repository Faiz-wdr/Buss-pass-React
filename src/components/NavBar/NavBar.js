import {React} from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from 'react-router-dom'
// import {FaBars, FaTimes} from 'react-icons/fa'
// import './NavBar.css'
function NavBar() {

     
     const navigate = useNavigate()

    return (
      <nav>
         <h1 className='h1'>Buss-Pass</h1>
        <ul className='list'>
        <li className='items'>Home</li>
        <li className='items'
                    onClick={() => navigate('/about')}
                >About</li>
        <li className='items'>Contact</li>
       <li><button className='items-btn'>Download App </button></li>
        </ul>
        <button className='btn'>    </button>
      </nav>
    );
}

export default NavBar