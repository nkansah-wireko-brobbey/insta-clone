import React from 'react'
import ProfileAvatar from './profile-avatar'

type Props={
    imgUrl: string
}

const Profile = ({imgUrl}:Props) => {
    return (
        <>
            <div className='flex flex-col items-center space-y-1'>
                <ProfileAvatar imgUrl={imgUrl}/>
                <h4 className='text-l font-semibold tracking-tight text-center border'>Akwasi Doe</h4>
                <h4 className='text-muted font-semibold tracking-tight text-center border'>Bremen, Ottawa</h4>
            </div>

        </>
    )
}

export default Profile