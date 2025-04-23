"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function HomePage() {
const [active, setActive] = useState(false)

    return (
        <div>
            <div className={`border ${active ?  "border-red-500 bg-red-500/10 p-3 text-red-700":"border-yellow-500 bg-yellow-500/10 p-3 text-yellow-700"} rounded`}>This is a trial run to check the buttons</div>
            <Button className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 my-10 cursor-pointer hover:opacity-95" onClick={()=>setActive(!active)}>
                Toggle
            </Button>
            <div></div>
        </div>
    )
}