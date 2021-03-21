import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './UserInfo.module.css';
import employee from '../../../assets/images/employee.svg';
import jobSearch from '../../../assets/images/job-search.svg';
import ProfileStatus from './UserStatus';
import UserIcon from '../../../assets/images/user.svg';

const SocialIcon = ({title , value}) => {

    return (
        <span>
             <a href={value}>{title}</a>
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
                <img src={props.profile.photos.large || UserIcon} alt='ava' className={props.profile.photos.large ? '' : s.userIcon}/>
                {/*props.isOwner && <input type="file" onChange={onMainPhotoSelected}></input>*/}
            </div>
            <div className={s.descriptionItem}>               
                <h2>{props.profile.fullName}</h2>
            </div>
            <div className={s.descriptionItem}>    
                <ProfileStatus status={props.status}
                 updateStatus={props.updateStatus} />
            </div>
            <div className={`${s.contacts} ${s.descriptionItem}`}>
                {Object.keys(props.profile.contacts).map(key => <SocialIcon key={key} title={key} value={props.profile.contacts[key]} />)}
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
