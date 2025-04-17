import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HomePage() {
    return (
        <div>
            <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                    <User className="h-4 w-4" />
                </AvatarFallback>
            </Avatar>
        </div>
    )
}