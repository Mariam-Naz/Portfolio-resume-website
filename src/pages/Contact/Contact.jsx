import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ResumeData from '../../utils/resumeData';
import './Contact.css';
import CustomBtn from '../../components/Button/CustomBtn';

const useStyles = makeStyles((theme) => ({
    root: {
            display: 'flex',
            flexWrap: 'wrap',
        marginBottom: theme.spacing(5),
        },
        textField: {
            marginBottom: theme.spacing(5),
            
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className='section' spacing={7}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Form</h6>
                        </Grid>
                        <Grid item xs={12}>
                                <form className='row contact-form top_30'>
                                    <Grid item xs={12} sm={6}>
                                        <TextField placeholder='Name' fullWidth/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField placeholder='Email' fullWidth/>
                                    </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className='margin-y'>
                                        <TextField multiline placeholder='Message'
                                            rows={5} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomBtn text='Submit' />
                                    </Grid>
                                </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Information</h6>
                        </Grid>
                        <Grid item xs={12} className='contact-info top_30'>
                            <Typography className='contact-info-text'> <span>Address: </span>{ResumeData.address}</Typography>
                            <Typography className='contact-info-text'> <span>Phone: </span>{ResumeData.phone}</Typography>
                            <Typography className='contact-info-text'> <span>Email: </span>{ResumeData.email}</Typography>
                            <div className='social-icons'>
                            {Object.keys(ResumeData.socials).map(key => (
                                <a href={ResumeData.socials[key].link}>{ResumeData.socials[key].icon}</a>
                            ))}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact
