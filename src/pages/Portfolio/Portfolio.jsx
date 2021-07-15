import React from 'react'
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../../components/Card/CustomCard';
import tindogApp from '../../assets/images/tindog-app.png';
import './Portfolio.css';
import ResumeData from '../../utils/resumeData';

const Portfolio = () => {
    return (
        <>
            <Grid container className='section'>
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Portfolio</h6>
                </Grid>
                <Grid item xs={12} className='portfolio-body top_30'>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            {ResumeData.portfolios.map(portfolio=>(
                                <a href={portfolio.link} target='_blank' className='portfolio-link'>
                                    <CustomCard title={portfolio.title} text={portfolio.text} img={portfolio.image} />
                                </a>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Portfolio
