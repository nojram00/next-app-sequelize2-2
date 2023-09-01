import { NextRequest, NextResponse } from "next/server";
import User from "../../../../db/models/users.model";


export async function GET(req : NextRequest) {
    const user = await User.findAll()

    return NextResponse.json(user)
}
