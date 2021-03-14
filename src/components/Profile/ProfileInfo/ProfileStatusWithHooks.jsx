import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e) => {
            setStatus(e.currentTarget.value)

    }

    return (
        <>
            { !editMode ?
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || "-------------"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode} />
                </div>
            }
        </>
    )

}


export default ProfileStatusWithHooks;