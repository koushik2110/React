import './NavigationLinks.css';
import { NavLink } from 'react-router-dom';

const NavigationLinks = (props)=>{
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}

export default NavigationLinks;