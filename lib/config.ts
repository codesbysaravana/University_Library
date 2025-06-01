const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,

        }
    }
}

//this is manual created for .env file mapping key values and passwords to imagekit endpoints

export default config;