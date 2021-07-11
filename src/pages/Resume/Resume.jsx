import React from 'react'
import {Grid} from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import {Work, School} from '@material-ui/icons';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Typography } from '@material-ui/core';

const CustomTimelineWordExpItems = ({ title, text, duration }) => {
    return (<TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            <Typography className='timeline-item-title'>{title}</Typography>
            <Typography className='timeline-item-duration'>{duration}</Typography>
            <Typography className='timeline-item-text'>{text}</Typography>
        </TimelineContent>
    </TimelineItem>
    )
}

const Resume = () => {
    return (
        <>
            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
                <Grid item xs={12} className='work-exp top_30'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomTimeline title={"Working History"} icon={<Work/>}>
                                <CustomTimelineWordExpItems 
                                title={"Art Director - Facebook Inc"} 
                                duration={"2010 - Present"}
                                    text={"Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."}
                                />
                            </CustomTimeline>
                        </Grid>
                        <Grid item xs>
                            <CustomTimeline title={"Education Histor"} icon={<School />}>

                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume;
