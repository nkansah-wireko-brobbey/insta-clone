import React from 'react'
import ProfileAvatar from './profile-avatar'

type Props = {
    imgUrl: string,
    name: string,
    location?: string
}

const UserProfile = ({imgUrl,name}:Props) => {
    return (
        <div className='flex flex-col items-center space-y-3 cursor-pointer'>
            <div className='mt-5'>

                <ProfileAvatar imgUrl={imgUrl ?? "https://github.com/shadcn.png"} />
            </div>
            <div>
                <h4 className='text-current/35 font-semibold tracking-tight text-center truncate w-20'>{name}</h4>
            </div>
        </div>
    )
}

export default UserProfile