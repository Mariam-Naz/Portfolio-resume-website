import React from 'react';
import './CustomBtn.css';
import {Button} from '@material-ui/core';

const CustomBtn = ({text,icon}) => {
    return (
        <Button className='custom_btn' endIcon={icon ? (<div className='custom_btn_icon'>{icon}</div>) : null} type="submit"><span className='custom_btn_text'>{text}</span></Button>
    )
}

export default CustomBtn
