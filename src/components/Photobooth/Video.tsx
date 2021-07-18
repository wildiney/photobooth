import React, { useEffect, useRef } from 'react'
import styles from './Video.module.css'

interface VideoProps {
  handleTakePhoto: string,
  height: number,
  width: number,
}
export default function Video ({ handleTakePhoto, height, width }: VideoProps) {
  const video = useRef('')
  const canvas = useRef('')

  useEffect(() => {
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

  const takePhoto = (photo) => {
    console.log("photo")
    const ctx = canvas.current.getContext("2d")
    ctx.drawImage(video.current, 0, 0, width, height);
    handleTakePhoto(canvas.current.toDataURL("image/png"));
  }

  return (
    <>
      <div className={styles.wrapper}>
        <video className={styles.player} ref={video} autoPlay></video>
        <canvas ref={canvas} width={width} height={height} style={{ display: 'none' }}></canvas>
        <button className={styles.click} onClick={takePhoto}></button>
      </div>
    </>
  )
}
