import React, { useState, useRef } from 'react'
import download from 'downloadjs'
// import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';


import styles from './ImagePreview.module.css'

import moldura01 from './molduras/moldura-01.png'
import moldura02 from './molduras/moldura-02.png'
import moldura03 from './molduras/moldura-03.png'
import moldura04 from './molduras/moldura-04.png'

interface ImagePreviewProps {
  image: string,
  height: number,
  width: number,
}

export default function ImagePreview ({ image, height, width }: ImagePreviewProps) {
  const canvasRef = useRef<any>()
  const [moldura, setMoldura] = useState<any>(moldura01)
  const molduras = [
    { image: moldura01 },
    { image: moldura02 },
    { image: moldura03 },
    { image: moldura04 }
  ]

  // const style = {
  //   position: 'absolute',
  //   width: '720px',
  //   height: '720px',
  //   top: 0,
  //   left: 0
  // }

  const changeMoldura = (image: string) => {
    console.log(image)
    setMoldura(image)
  }

  const printDoc = (element: HTMLElement) => {
    toJpeg(element)
      .then(function (dataUrl) {
        download(dataUrl, 'photobooth.png');
      });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div ref={canvasRef} className={styles.photo} >
          <img src={image} alt='' width={width} height={height} />
          <img src={moldura} alt='' width={width} height={height} />
        </ div>
        <div className={styles.molduras} >
          <div className={styles.miniaturas} >
            {molduras.map((moldura => {
              return <img src={moldura.image} alt='' onClick={changeMoldura.bind(null, moldura.image)} />
            }))}
            {/* <img src={moldura02} alt='' onClick={changeMoldura.bind(null, moldura02)} />
            <img src={moldura01} alt='' onClick={changeMoldura.bind(null, moldura01)} />
            <img src={moldura02} alt='' onClick={changeMoldura.bind(null, moldura02)} /> */}
          </div >
          <div className={styles.download} >
            <button className={styles.btn} onClick={() => printDoc(canvasRef.current)}>SALVAR</button>
          </div>
        </div >
      </div>
    </>
  )
}
