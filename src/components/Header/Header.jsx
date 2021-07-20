import React from 'react'
import {
    Navbar, Nav, Button, Form, FormControl, NavDropdown, Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Link, withRouter} from 'react-router-dom';
import { HomeRounded , LinkedIn, Facebook, Github, SchoolRounded, Telegram, Mail } from '@material-ui/icons';
import ResumeData from '../../utils/resumeData';
import CustomBtn from '../Button/CustomBtn';
import './Header.css';

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar expand="lg" className='header'>
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='header_home'><HomeRounded /></Navbar.Brand>
            </Nav.Link>
                <Navbar.Toggle aria-controls="nav-bar" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                    <Nav.Link 
                    as={NavLink} 
                    to='/resume'
                    className={pathName=='/resume' ? 'header_active_link' : 'header_link'}
                    >
                        RESUME
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/portfolio'
                        className={pathName == '/portfolio' ? 'header_active_link' : 'header_link'}
                    >
                        PORTFOLIO
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/contact'
                        className={pathName == '/contact' ? 'header_active_link' : 'header_link'}
                    >
                        CONTACT
                    </Nav.Link>
                    </Nav>
                    <div className='header_right'>
                        {Object.keys(ResumeData.socials).map(key=>(
                            <a href={ResumeData.socials[key].link} target='_blank'>{ResumeData.socials[key].icon}</a>
                        ))}
                        <CustomBtn text='Hire Me' icon={<Telegram />} style={{float:"right"}}/>
                    </div>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
