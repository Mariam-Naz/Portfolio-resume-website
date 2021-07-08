import React from 'react'
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ResumeData from '../../utils/resumeData';
import './Resume.css';

const Resume = () => {
    return (
       <>
        {/* About me  */}
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                    <h6 className='section_title_text'>About Me</h6>
            </Grid>
            <Grid item xs={12} className='about_body'>
                <span></span>
                <Typography variant='body2'>{ResumeData.about}</Typography>
            </Grid>
        </Grid>

        { /* Education and Experience */ }
            <Grid container className='section pb_45'>

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

export default Resume
