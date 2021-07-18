import React, { useEffect, useRef } from 'react'
import styles from './Video.module.css'

interface VideoProps {
  handleTakePhoto: any,
  height: number,
  width: number,
}
export default function Video ({ handleTakePhoto, height, width }: VideoProps) {
  const video = useRef<any>('')
  const canvas = useRef<any>('')

  useEffect(() => {
    video.current.defaultMuted = true
    navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: width },
        height: { ideal: height },
      }
    }).then((stream) => {
      console.log(stream)
      video.current.srcObject = stream
    })
  })

  const takePhoto = (photo: any) => {
    console.log("photo")
    const ctx = canvas.current.getContext("2d")
    ctx.drawImage(video.current, 0, 0, width, height);
    handleTakePhoto(canvas.current.toDataURL("image/png"));
  }

  return (
    <>
      <div className={styles.wrapper}>
        <video className={styles.player} ref={video} autoPlay={true} muted loop={true} controls={false} playsInline={true}></video>
        <canvas ref={canvas} width={width} height={height} style={{ display: 'none' }}></canvas>
        <button className={styles.click} onClick={takePhoto}></button>
      </div>
    </>
  )
}
