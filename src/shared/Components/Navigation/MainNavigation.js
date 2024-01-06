import './MainNavigation.css';
import React ,{useState} from 'react';
import MainHeader from './MainHeader';
import NavigationLinks from './NavigationLinks';
import { Link } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const  openDrawer = ()=>{
        setDrawerIsOpen(true);
    }
    const  closeDrawer = ()=>{
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            <SideDrawer show= {drawerIsOpen} onClick={closeDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavigationLinks ></NavigationLinks>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavigationLinks></NavigationLinks>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;