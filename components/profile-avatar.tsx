import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import { User } from 'lucide-react'
import React from 'react'

const ProfileAvatar = ({imgUrl}:{imgUrl: string}) => {
    return (
        <div className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px] rounded-full">
        <Avatar className="size-15 rounded-full">
          <AvatarImage src={imgUrl} alt="User" className="rounded-full" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
      
    )
}

export default ProfileAvatar