import ImageKit from "imagekit" //SDK imagekit import 
import config from "../../../../lib/config"
import { NextResponse } from "next/server" //to return an api response

const { env: { imagekit: { publicKey, privateKey, urlEndpoint } } } = config;
//destructure the config object to get the imagekit credentials from lib/config.ts

//instance of image kit 
const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });
console.table(imagekit);

export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters());
}
//now This API handler responds to a GET request with ImageKit auth parameters (token, expire, signature). needed for client side uploads
///returns ImageKit authentication parameters for client-side uploads