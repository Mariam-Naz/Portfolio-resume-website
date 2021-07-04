import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

export default{
    name: 'Mariam Naz',
    title: 'Software Engineer',
    birthday: '02th December, 1999',
    email: 'mariamnaz212@gmail.com',
    address: 'Karachi, Pakistan',
    phone: '(+92) 348 2353933',
    socials:{
        Email: {
            link: 'mailto:mariamnaz212@gmail.com',
            text: 'mariamnaz212@gmail.com',
            icon: <MailIcon />
        },
        Facebook:{
            link: 'www.facebook.com',
            text: 'MyFacebook',
            icon: <FacebookIcon />
        },
        Linkedin: {
            link: 'https://www.linkedin.com',
            text: 'MyLinkedin',
            icon: <LinkedInIcon />
        },
        Github: {
            link: 'www.github.com',
            text: 'MyGithub',
            icon: <GitHubIcon />
        }
    }
}