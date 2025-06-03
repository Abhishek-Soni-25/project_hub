import { supabase } from "@/app/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { session, user } = await request.json()

    if (user?.fullName && user?.email){
        return NextResponse.json({ status: 201 })
    }

    const fullName = session.user.name
    const email = session.user.email

    const {} = await supabase
            .from("users")
            .insert({ fullName, email })
    return NextResponse.json({ status: 201 })
}