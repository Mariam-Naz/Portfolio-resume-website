import React from 'react'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ResumeData from '../../utils/resumeData';
import './Home.css';
import ServiceCard from '../../components/Card/ServiceCard';

const Home = () => {
    return (
       <>
        {/* About me  */}
            <Grid container className='section'>
            <Grid item className='section_title mb_30'>
                <span></span>
                    <h6 className='section_title_text'>About Me</h6>
            </Grid>
            <Grid item xs={12} className='about_body'>
                <span></span>
                <Typography variant='body2'>{ResumeData.about}</Typography>
            </Grid>
        </Grid>

        { /* Services */ }
            <Grid container className='section_graybg'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                        <h6 className='section_title_text'>My Services</h6>
                </Grid>
                <Grid item xs={12} className='service_body'> 
                <Grid container spacing={3}>
                    {Object.keys(ResumeData.services).map(key=>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>  
                            <ServiceCard title={ResumeData.services[key].title} text={ResumeData.services[key].text} icon={ResumeData.services[key].icon} />
                        </Grid>
                    ))}
                </Grid>
                </Grid>
            </Grid>

         {/* Services  */}
            <Grid container className='section pb_45'>

        </Grid>

        {/* Skills */}
            <Grid container className='section pb_45'>

        </Grid>
        
       </>
    )
}

export default Home
