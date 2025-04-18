import React from 'react'
import ProfileAvatar from './profile-avatar'

type Props={
    imgUrl: string
}

const Profile = ({imgUrl}:Props) => {
    return (
        <>
            <div className='flex flex-col items-center space-y-3'>
                <ProfileAvatar imgUrl={imgUrl}/>
                <div>
                <h4 className='text-l font-semibold tracking-tight text-center'>Akwasi Doe</h4>
                <h4 className='text-current/35 font-semibold tracking-tight text-center'>Bremen, Ottawa</h4>
                </div>
            </div>

        </>
    )
}

export default Profile