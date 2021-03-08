import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import employee from '../../../../assets/images/employee.svg';
import jobSearch from '../../../../assets/images/job-search.svg';
import ProfileStatus from './ProfileStatus';
import UserIcon from '../../../../assets/images/user.svg';

const SocialIcon = (props) => {
    if(props.link)console.log(props.link);
    return (
        <span>
            {props.link && <a href={props.link}>{props.link[0].toUpperCase()}</a>}
        </span>
    )
}


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let sIcons = [];
    for (let i = 0; i <= Object.keys(props.profile.contacts).length; i++) {
        if(props.profile.contacts[i]){
            sIcons.push(props.profile.contacts[i]);
            console.log(props.profile.contacts[i]);
        }
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.DescriptionBlock}>
            <div className={s.descriptionItem}>
                <img src={props.profile.photos.large || UserIcon} alt='ava' className={s.userIcon}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}></input>}
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status}
                 updateStatus={props.updateStatus} />
            </div>
            <div className={`${s.contacts} ${s.descriptionItem}`}>
               {/* <SocialIcon link={props.profile.contacts.facebook} />
                <SocialIcon link={props.profile.contacts.website} />
                <SocialIcon link={props.profile.contacts.vk} />
                <SocialIcon link={props.profile.contacts.twitter} />
                <SocialIcon link={props.profile.contacts.instagram} />
                <SocialIcon link={props.profile.contacts.youtube} />
                <SocialIcon link={props.profile.contacts.github} />
                <SocialIcon link={props.profile.contacts.mainLink} />
                */}
                {sIcons.map(i => {return <span>{i}</span>})}
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
