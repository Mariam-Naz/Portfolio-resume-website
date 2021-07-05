import React from 'react'
import {
    Navbar, Nav, Button, Form, FormControl, NavDropdown, Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Link, withRouter} from 'react-router-dom';
import { HomeRounded , LinkedIn, Facebook, Github, SchoolRounded, Telegram, Mail } from '@material-ui/icons';
import ResumeData from '../../utils/resumeData';
import CustomBtn from '../Button/CustomBtn';

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='header_home'><HomeRounded /></Navbar.Brand>
            </Nav.Link>
                <Navbar.Toggle aria-controls="nav-bar" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                    <Nav.Link 
                    as={NavLink} 
                    to='/'
                    className={pathName=='/' ? 'header_active_link' : 'header_link'}
                    >
                        Resume
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/portfolio'
                        className={pathName == '/portfolio' ? 'header_active_link' : 'header_link'}
                    >
                        Portfolio
                    </Nav.Link>
                    </Nav>
                    <div>
                        {Object.keys(ResumeData.socials).map(key=>(
                            <a href={ResumeData.socials[key].link}>{ResumeData.socials[key].icon}</a>
                        ))}
                        <CustomBtn text='Hire Me' icon={<Telegram />} />
                    </div>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
