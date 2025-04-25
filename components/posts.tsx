import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bookmark, FileWarning, Heart, MessageCircle, MoreHorizontal, Send, Star } from "lucide-react"

export default function Post() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="flex flex-row items-center p-2">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <span>username</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="w-8 h-8 ml-auto rounded-full">
              <MoreHorizontal className="w-4 h-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="w-4 h-4 mr-2" />
              Add to favorites
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <FileWarning className="w-4 h-4 mr-2" />
              Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0">
        {/* <Image
          src="/placeholder.svg?height=600&width=600"
          width={600}
          height={600}
          alt="Post image"
          className="object-cover w-full aspect-square h[600px] rounded-tl-lg rounded-tr-lg"
        /> */}
        <Image src={"/static/pexels-img-01.jpg"} width={400} height={200} className="object-cover w-full h-[300px]" alt={""} />
      </CardContent>
      <CardFooter className="flex flex-col p-4 space-y-4">
        <div className="flex items-center w-full">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="w-5 h-5" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageCircle className="w-5 h-5" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Send className="w-5 h-5" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto rounded-full">
            <Bookmark className="w-5 h-5" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="w-full">
          <p className="font-semibold text-sm">123 likes</p>
          <div className="mt-1">
            <span className="font-semibold text-sm">username</span>{" "}
            <span className="text-sm">Enjoying this beautiful day! ✨ #sunshine #goodvibes</span>
          </div>
          <p className="text-muted-foreground text-xs mt-1">View all 24 comments</p>
          <div className="mt-2 space-y-1">
            <div className="flex items-start">
              <span className="font-semibold text-sm">commenter1</span>
              <span className="text-sm ml-2">This looks amazing! 😍</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-sm">commenter2</span>
              <span className="text-sm ml-2">Great shot! Where is this?</span>
            </div>
          </div>
          <p className="text-muted-foreground text-xs mt-2">2 HOURS AGO</p>
        </div>
      </CardFooter>
    </Card>
  )
}
