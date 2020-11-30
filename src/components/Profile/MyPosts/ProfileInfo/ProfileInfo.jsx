import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import employee from '../../../../assets/images/employee.svg';
import jobSearch from '../../../../assets/images/job-search.svg';
import ProfileStatus from './ProfileStatus';
 

const SocialIcon = (props) => {
    return (
        <a href={props.link ? props.link : ''}>{props.link ? props.link[0].toUpperCase() : 'x'}</a>
    )
}


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div className={s.DescriptionBlock}>
            <div className={s.descriptionItem}>
                <img src={props.profile.photos.large} alt='ava' />
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={'123'} />
            </div>
            <div className={`${s.Contacts} ${s.descriptionItem}`}>
                <SocialIcon link={props.profile.contacts.facebook} />
                <SocialIcon link={props.profile.contacts.website} />
                <SocialIcon link={props.profile.contacts.vk} />
                <SocialIcon link={props.profile.contacts.twitter} />
                <SocialIcon link={props.profile.contacts.instagram} />
                <SocialIcon link={props.profile.contacts.youtube} />
                <SocialIcon link={props.profile.contacts.github} />
                <SocialIcon link={props.profile.contacts.mainLink} />
            </div>
            <div className={`${s.jobInfo}  ${s.descriptionItem}`} >
                <h3>О работе:</h3>
                <p>{props.profile.lookingForAJob ? 'Работаю' : 'Ищу работу'}</p>
                <img className={s.job} src={props.profile.lookingForAJob ? employee : jobSearch} alt='job' />
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div className={`${s.about} ${s.descriptionItem}`}>
                <h3>Обо мне:</h3>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
