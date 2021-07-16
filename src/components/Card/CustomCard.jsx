import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TimelineDot from '@material-ui/lab/TimelineDot';
import webDevelopment from '../../assets/icons/web-development.png';
import sqa from '../../assets/icons/sqa.png';
import tindogApp from '../../assets/images/tindog-app.png';
import asapCoupon from '../../assets/images/asapcoupon.png'
import './CustomCard.css';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const CustomCard = ({ title, text, icon, img }) => {

    const [show , setShow] = useState({opacity:'' , marginTop:''});
    const opacity = show.opacity;
    const marginTop = show.marginTop;

    function cardHover(){
        setShow(prevState=>{
            return{
                ...prevState,
                opacity:'0.9',
                marginTop:'-20px',
            }
        })
    }

    function cardNotHover() {
        setShow(prevState => {
            return {
                ...prevState,
                opacity: '0',
                marginTop: '0'
            }
        })
    }

    return (
        <Card className={img ? 'portfolio-card' : 'service-card'} onMouseOver={cardHover} onMouseOut={cardNotHover}>
            <CardContent>
                {icon ? (<img className='service-card-icon' src={icon} alt={title} />) : null}
                {img ? (<img className='portfolio-card-image' src={img} alt={title} />) : null}
                {img ? (<div className='portfolio-icon' style={{opacity}}>
                    <OpenInNewIcon className='open-icon' style={{marginTop}}/>
                </div>) :null
}
                <figcaption class='portfolio-text-body'>
                    <div className={icon ? 'service-card-title-div' : null}>
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
                </figcaption>
            </CardContent>
        </Card>
    );
}

export default CustomCard
