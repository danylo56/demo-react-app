import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from "./ProfileInfo.module.css";
import check from "../../../assets/images/check.svg";
import close from "../../../assets/images/close.svg";
import ProfileStatus from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    

    
    return (
        <div>
            <img
                src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
                className={s.big_image}/>
            <div className={s.descriptionBlock}>
                <img className={s.profileImage} src={props.profile.photos.large ? props.profile.photos.large : 'https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png'}/>
                <div className={s.info}>
                    
                    <div><h3>{ props.profile.fullName }</h3></div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;