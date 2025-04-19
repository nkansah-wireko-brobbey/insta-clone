import React from 'react'
import ProfileAvatar from './profile-avatar'

type Props={
    imgUrl: string
}

const Profile = ({imgUrl}:Props) => {
    return (
        <>
            <div className='flex flex-col items-center space-y-3'>
                <div className='mt-5'>

                <ProfileAvatar imgUrl={imgUrl || "https://github.com/shadcn.png"}/>
                </div>
                <div>
                <h4 className='text-lg font-semibold tracking-tight text-center'>Akwasi Doe</h4>
                <h4 className='text-current/35 font-semibold tracking-tight text-center'>Bremen, Ottawa</h4>
                </div>
                <div className='flex gap-4 mt-4'>
                    <div>
                    <h4 className='text-xs font-semibold tracking-tight text-center'>578</h4>
                    <h4 className='text-current/35 text-xs font-semibold tracking-tight text-center uppercase'>Posts</h4>
                    </div>
                    <div>
                    <h4 className='text-xs font-semibold tracking-tight text-center'>37.2K</h4>
                    <h4 className='text-current/35 text-xs font-semibold tracking-tight text-center uppercase'>Followers</h4>
                    </div>
                    <div>
                    <h4 className='text-xs font-semibold tracking-tight text-center'>989</h4>
                    <h4 className='text-current/35  text-xs font-semibold tracking-tight text-center uppercase'>Following</h4>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile