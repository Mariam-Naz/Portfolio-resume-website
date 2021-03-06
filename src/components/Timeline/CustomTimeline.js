import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './CustomeTimeline.css';
import { Typography } from '@material-ui/core';


const CustomTimeline = ({ title, icon, children }) => {
    return (
        <Timeline className='timeline'>
            { /*Header items*/}
            <TimelineItem className='timeline_item_header'>
                <TimelineSeparator>
                    <TimelineDot className='timeline_dot_header'>{icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant='h6' className='timeline_content_header'>{title}</Typography></TimelineContent>
            </TimelineItem>

            {/*Remaining items*/}
            {children}

        </Timeline>

    )
}


export const CustomTimelineSeparator = ({arrLength, id}) => {
    return (
        <TimelineSeparator className='separator_padding'>
            <TimelineDot variant='outlined' className='timeline_dot' />
            {arrLength == id ? null : <TimelineConnector /> }{ id ? null : <TimelineConnector />}
        </TimelineSeparator>
    )
}


export default CustomTimeline
