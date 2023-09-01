import { NextRequest, NextResponse } from "next/server";
import User from "../../../../db/models/users.model";

export async function POST(req: NextRequest){

    const addUser = await User.create({
        username: req.nextUrl.searchParams.get('username'),
        password: req.nextUrl.searchParams.get('password')
    })

    //it should be return a bool (must be replace addUser)
    if(addUser)
    {
        return NextResponse.json({success: true})
    }
    else
    {
        return NextResponse.json({success: false})
    }
}
