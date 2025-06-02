"use client"

//since uses client side components

import React from 'react'
import { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next"; //SDK imagekit import
import config from "../lib/config"; //import the config file to get the imagekit credentials
import Image from "next/image";
import { toast } from "sonner"

const { env: { imagekit: { publicKey, urlEndpoint } } } = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if(!response.ok) {
      const errorTxt = await response.text()

      throw new Error(
        `Error authenticating: ${response.status}: ${errorTxt}`);
    } 

    const data = await response.json();
    const { signature, expire, token } = data;

    return {token, expire, signature};
  } catch (err) {
    throw new Error(`Error authenticating: ${err.message}`);
  }
}


//imageUpload takes inupt prop as filepath type string cuz typescript 

const ImageUpload = ({ onFileChange }: { onFileChange: (filePath: string) => void }) => {
  const IKUploadRef = useRef(null);
  const[file, setFile] = useState<{ filePath: string } | null>(null)

  const onError = (errors: any) => {
    console.log(errors)
    // Error
    toast.error("Upload Failed", {
          description: "Please try again with a different image"
      })
  }


  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    //new sonner toast message popup after upload successful!
    toast.success("Image Upload Successful", {
            description: "Your university card has been uploaded successfully"
    })

   /*  toast.success("Image Upload Successful", {
  description: "Your university card has been uploaded",
  action: {
    label: "View",
    onClick: () => console.log("View image")
  }
}) */
  };

  return (
    <ImageKitProvider 
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className='hidden' 
        ref={IKUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />

      <button className='upload-btn' onClick={(e) => {
        e.preventDefault();

        if(IKUploadRef.current) {
          //the below comment is to avoid typescript error
          // @ts-ignore
          IKUploadRef.current?.click();
        }
      }}>
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className='"object-contain'
        />

        <p className='text-base text-light-100'>Upload a File</p>

        {/* or if file is already uploaded, click to view it */}
        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {/* and if file is alerady uploaded, it appeears here with IKImage */}
      {file && (
        <IKImage 
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
      
    </ImageKitProvider>
  )
}

export default ImageUpload

//created by us!

//Flow app/api/auth/imagekit/route.ts -------->(Next get response for authenticator) --------> ImageUplaod