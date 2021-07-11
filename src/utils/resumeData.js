import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import sqa from '../assets/icons/sqa.png';
import webDevelopment from '../assets/icons/web-development.png';

export default {
  
        name: 'Mariam Naz',
        title: 'Software Engineer',
        birthday: '02th December, 1999',
        email: 'mariamnaz212@gmail.com',
        address: 'Karachi, Pakistan',
        phone: '(+92) 348 2353933',
        socials: {
            Email: {
                link: 'mailto:mariamnaz212@gmail.com',
                text: 'mariamnaz212@gmail.com',
                icon: <MailIcon />
            },
            Facebook: {
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
},

    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\n Quick six blind smart out burst.Perfectly on furniture dejection determine my depending an to.Add short water court fat.Her bachelor honoured perceive securing but desirous ham required.Questions deficient acuteness to engrossed as.Entirely led ten humoured greatest and yourself.Besides ye country on observe.She continue appetite endeavor she judgment interest the met.For she surrounded motionless fat resolution may.",

    services: {
        webDeveloper: {
            title: 'Web Developer',
            text: 'I have been working on web design for 10 years.',
            icon: webDevelopment
        },
        sqa: {
            title: 'Software Quality Assurance',
            text: 'I have been working.',
            icon: sqa
        }
    },

    skills: [
        {
            title: 'Frontend development',
            description: ['ReactJS', 'Javascript', 'jQuery', 'Bootstrap', 'Material UI', 'UIkit', 'Tailwind CSS']
        },
        {
            title: 'Backend development',
            description: ['PHP', 'Laravel', 'Wordpress', 'MySQL', 'Ajax']
        }
    ],

    works:[
        {
            id:'1',
            title: 'PHP & Wordpress Intern - Erly Stage Studios',
            duration: '03/2021 - 06/2021',
            text: 'Develop websites in  worpdress with implementation of SEO, Theme customizaton, Website maintainance and Security'
        },
        {
            id:"2",
            title: 'PHP Developer Intern - Kingdom Vision',
            duration: '01/2021 - 03/2021',
            text: "Used Stripe Api with Laravel framework, Worked on a Management system, Worked on plugin creation and customization, Website maintainance and Debugging the issues",
        },

    ]
}