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
           
        },
        textField: {
            marginBottom: theme.spacing(5),
            marginRight: theme.spacing(2),
            width: '25ch',
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className='section'>
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Contact Form</h6>
                </Grid>
                <Grid itme xs={12}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} className='about_body top_30'>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField className={classes.textField} id="standard-basic" placeholder='Name'/>
                                <TextField className={classes.textField} id="standard-basic" placeholder='Email' />
                                <TextField id="standard-basic" multiline placeholder='Message'
                                    rows={5} fullWidth/>
                            </form>
                            <CustomBtn text='Submit' />
                    </Grid>
                </Grid>
             
                </Grid>
            </Grid>
        </>
    )
}

export default Contact
