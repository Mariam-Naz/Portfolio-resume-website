import React from 'react'
import './Footer.css';
import {Typography} from '@material-ui/core';
import ResumeData from '../../utils/resumeData'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">
                    {ResumeData.name}.
                </Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    &#169; 2021 All rights reserved.
                </Typography>
            </div>
        </div>
    )
}

export default Footer
