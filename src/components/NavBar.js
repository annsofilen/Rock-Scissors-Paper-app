import { Link } from 'react-router-dom';



import '../styling/nav-bar.css'

function NavBar() {


    // left navbar 
    return (
        <div className='navbar'>
            <span className='span-1'>  <Link to={'/history'} style={{ textDecoration: 'none' }} >Game History</Link>  </span>
            <span className='span-2'>  <Link to={'/rules'} style={{ textDecoration: 'none' }}>Game Rules</Link> </span>
            <span className='span-3'>  <Link to={'/statistics'} style={{ textDecoration: 'none' }}>Game Statistics</Link> </span>



        </div>
    )
}

export default NavBar;