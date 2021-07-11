import React, {useState} from 'react'
import {Grid} from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import {Work, School} from '@material-ui/icons';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Typography } from '@material-ui/core';
import ResumeData from '../../utils/resumeData';
import "./Resume.css";

const CustomTimelineWordExpItems = ({ title, text, duration, carrLength, cid }) => {
    return (<TimelineItem>
        <CustomTimelineSeparator arrLength={carrLength} id={cid}/>
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
                                {ResumeData.works.map(work=>
                                    <CustomTimelineWordExpItems
                                        title={work.title}
                                        duration={work.duration}
                                        text={work.text}
                                        cid={work.id}
                                        carrLength={ResumeData.works.length}
                                    />
                                
                                )}
                            </CustomTimeline>
                        </Grid>
                        <Grid item xs>
                            <CustomTimeline title={"Education Histor"} icon={<School />}>
                                {ResumeData.works.map(work => (
                                    <CustomTimelineWordExpItems
                                        title={work.title}
                                        duration={work.duration}
                                        text={work.text}
                                        cid={work.id}
                                        carrLength={ResumeData.works.length}
                                    />
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume;
