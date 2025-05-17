import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getAllPhotos();

    //send a JSON response to the client. The data parameter is the object that you will be sent as a JSON response.
    return NextResponse.json(data); 
}