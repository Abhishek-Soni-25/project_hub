import { supabase } from "@/app/lib/supabaseClient"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { email, password } = await request.json()

    const { data } = await supabase
            .from("users")
            .select('fullName, email, password')
            .eq('email', email)

    if(!data || data.length === 0){
        return NextResponse.json({ message: "User not found" }, { status: 400 })
    }

    const fullname = data[0].fullName
    const passwordIsCorrect = await bcrypt.compare(password, data[0].password)

    if(!passwordIsCorrect){
        return NextResponse.json({ message: "Password is wrong" }, { status: 400 })
    }

    return NextResponse.json({ value: fullname }, { status: 201 })
}