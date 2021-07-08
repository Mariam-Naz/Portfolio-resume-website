import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import webDevelopment from '../../assets/icons/web-development.png';
import sqa from '../../assets/icons/sqa.png';
import './ServiceCard.css';


const ServiceCard = ({title, text, icon}) => {

    return (
        <Card className='service-card'>
            <CardContent>
                <img className='service-card-icon' src={icon} alt={title} />
                <div className='service-card-title-div'>
                <Typography className='service-card-title'>
                    {title}
                </Typography>
                </div>
                <Typography className='service-card-text'>
                   {text}
                </Typography>
            </CardContent>
            
        </Card>
    );
}

export default ServiceCard
