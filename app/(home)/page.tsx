import UserProfile from "@/components/user-profile"
import { profiles } from "../Mocks/profiles"
import { Badge } from "@/components/ui/badge"
import Post from "@/components/posts"

export default function HomePage() {
    const users = profiles

    return (
        <div>
            <div className="flex items-center justify-center space-x-3">

                {
                    users.map((user) => (
                        <UserProfile key={user.id} imgUrl={user.imgUrl} name={user.name} />
                    ))
                }
            </div>
            <div className="flex justify-between items-center mt-5 border w-3xl mx-auto p-4 rounded-lg">
                <h3 className="text-lg font-semibold tracking-tight">Feeds</h3>
                <div className="space-x-2">
                    <Badge variant="outline" className="rounded-full w-18 cursor-pointer">Latest</Badge>
                    <Badge className="rounded-full w-18 cursor-pointer">Popular</Badge>
                </div>

            </div>
            <div className="mt-5 w-3xl mx-auto p-4 rounded-lg ">
                <Post />
            </div>
        </div>
    )
}