import React from 'react';
import { Typography } from '@material-ui/core';
import './Profile.css';
import profile_pic from '../../assets/images/profile_pic.jpeg';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/CustomTimeline';
import ResumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomBtn from '../Button/CustomBtn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Cv from '../../assets/CV-Mariam-Naz.pdf';

const CustomTimelineItems = ({title, text, link})=>{
   return( <TimelineItem>
        <CustomTimelineSeparator />
       <TimelineContent className='timeline_content'>{link ? (<Typography className='timeline_item_text'><span>{title}: </span><a href={link} target="_blank">{text}</a></Typography>) : (<Typography className='timeline_item_text'><span>{title}: </span>{text}</Typography>)}</TimelineContent>
    </TimelineItem>
   )
}
const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div class='profile_name'>
                <Typography className='name'>{ResumeData.name}</Typography>
                <Typography className='title'>{ResumeData.title}</Typography>
            </div>
            <figure class='profile_image'>
                <img src={profile_pic} alt='profile_image'/>
            </figure>
            <div class='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItems title='Name' text={ResumeData.name} />
                    <CustomTimelineItems title='Title' text={ResumeData.title} />
                    {Object.keys(ResumeData.socials).map((key) => (
                        <CustomTimelineItems title={key} text={ResumeData.socials[key].text} link={ResumeData.socials[key].link} />
                    ))}
                </CustomTimeline>
                <div className='custom_btn_container'>
                    <CustomBtn text='Download Cv' icon= {<GetAppIcon />} cv={Cv} >
                      
                    </CustomBtn>
                </div>
            </div>
        </div>
    )
}

export default Profile;