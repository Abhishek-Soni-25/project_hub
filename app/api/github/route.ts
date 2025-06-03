import { supabase } from "@/app/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { session, user } = await request.json()

    const fullName = session.user.name
    const email = session.user.email

    if (user?.fullName && user?.email){
        return NextResponse.json({ status: 201 })
    }

    const { data } = await supabase
        .from("users")
        .select('email')
        .eq('email', email)

    if (data && data.length > 0) {
        return NextResponse.json({ status: 201 })
    }

    const {} = await supabase
            .from("users")
            .insert({ fullName, email })

    return NextResponse.json({ status: 201 })
}