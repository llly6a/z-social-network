import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './UserInfo.module.css';
import employee from '../../../assets/images/employee.svg';
import jobSearch from '../../../assets/images/job-search.svg';
import ProfileStatus from './UserStatus';
import UserIcon from '../../../assets/images/user.svg';

const SocialIcon = ({title , value}) => {

    return (
            <a href={value}>{title}</a>
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

    /*const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }*/

    return (
        <div className={s.descriptionBlock}>
            <div className={s.descriptionItem}>
                <img src={props.profile.photos.large || UserIcon} alt='ava' className={props.profile.photos.large ? s.userPhoto : s.userIcon}/>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status}
                 updateStatus={props.updateStatus} />
                {/*props.isOwner && <input type="file" onChange={onMainPhotoSelected}></input>*/}
            </div>
            <div className={`${s.descriptionItem}`}>
                <h3>About me:</h3>
                <p>{props.profile.aboutMe || 'пользователь не добавил оисание о себе'}</p>
            </div>
            <div className={`${s.descriptionItem}`}>
                <h3>Links:</h3>
                <div className={s.links}>
                    {Object.keys(props.profile.contacts).map(key => <SocialIcon key={key} title={key} value={props.profile.contacts[key]} />)}
                </div>
            </div>
            <div className={`${s.descriptionItem}`} >
                <h3>Job:</h3>
                <img className={s.jobIcon} src={props.profile.lookingForAJob ? employee : jobSearch} alt='job' />
                <span>{props.profile.lookingForAJob ? 'Работаю' : 'Ищу работу'}</span>
                <p>
                    {props.profile.lookingForAJobDescription || 'Пользователь не добавил описание о работе'}
                </p>
            </div>

        </div>
    )
}

export default ProfileInfo;
