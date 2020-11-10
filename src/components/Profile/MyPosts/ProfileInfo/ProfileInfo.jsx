import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large} alt='ava' />
            </div>
        </div>
    )
}

export default ProfileInfo;
