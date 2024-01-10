import { NextRequest, NextResponse } from "next/server";

export async function GET(request){
    console.log("********* CRON EXECUTED ************");
    return NextResponse.json({status:200,message:'cron executed'})
}