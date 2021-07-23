import React from 'react';
import './CustomBtn.css';
import {Button} from '@material-ui/core';
import Cv from '../../assets/CV-Mariam-Naz.pdf';

const CustomBtn = ({text,icon, cv=undefined, link}) => {

       
    return (
        <Button className='custom_btn' endIcon={icon ? (<div className='custom_btn_icon'>{icon}</div>) : null} type="submit" href={cv ? cv : link} download={cv ? 'CV Mariam Naz' : cv} target='_blank'><span className='custom_btn_text'>{text}</span></Button>
    )
}

export default CustomBtn
