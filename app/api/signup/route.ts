import { supabase } from "@/app/lib/supabaseClient"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { fullName, email, password } = await request.json()

    // user already exists
    const { data } = await supabase
        .from("users")
        .select('email')
        .eq('email', email)

    if (data && data.length > 0) {
        return NextResponse.json({ message: "Email already registered" }, { status: 400 })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const { error } = await supabase
        .from('users')
        .insert({ fullName, email, password: hashedPassword })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
}