import React from 'react';
import { Typography } from '@material-ui/core';
import './Profile.css';
import profile_pic from '../../assets/images/profile_pic.jpeg';


const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div class='profile_name'>
                <Typography className='name'>Maaz Shah</Typography>
                <Typography className='title'>Web Developer</Typography>
            </div>
            <figure class='profile_image'>
                <img src={profile_pic} />
            </figure>
            <div class='profile_information'>
                Timeline
                <br />
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile;