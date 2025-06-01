"use client"

//since uses client side components

import React from 'react'
import { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next"; //SDK imagekit import
import config from "../lib/config"; //import the config file to get the imagekit credentials
import Image from "next/image";

const { env: { imagekit: { publicKey, urlEndpoint } } } = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit/auth`);

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


const ImageUpload = () => {
  const IKUploadRef = useRef(null);
  const[file, setFile] = useState<{ filePath: string } | null>(null)

  const onError = () => {}
  const onSuccess = () => {}

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