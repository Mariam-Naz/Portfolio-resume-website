import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TimelineDot from '@material-ui/lab/TimelineDot';
import webDevelopment from '../../assets/icons/web-development.png';
import sqa from '../../assets/icons/sqa.png';
import tindogApp from '../../assets/images/tindog-app.png';
import './CustomCard.css';


const CustomCard = ({ title, text, icon, img }) => {

    return (
        <Card className={img ? 'portfolio-card' : 'service-card'}>
            <CardContent>
                {icon ? (<CardMedia className='service-card-icon' image={icon} alt={title} />) : null}
                {img ? (<CardMedia className='portfolio-card-image' height="140" image={img} alt={title} />) : null}
                <div className='service-card-title-div'>
                    <Typography className='service-card-title'>
                        {title}
                    </Typography>
                </div>
                {(icon || img) ? (<Typography className='service-card-text'>
                    {text}
                </Typography>) : (
                    text.map(description => (
                        <Typography className='skill-card-text'>
                            <TimelineDot variant='outlined' className='skill-dot' />
                            {description}
                        </Typography>
                    )))
                }
            </CardContent>
        </Card>
    );
}

export default CustomCard
