"use client"

//since uses client side components

import React from 'react'
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";

//first step-1 authenticate for to upload images safely
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
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload