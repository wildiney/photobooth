import React, { useState } from 'react'

import ImagePreview from './ImagePreview'
import Video from './Video'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

export default function Photobooth () {
    const [dataUri, setDataUri] = useState('')
    const height = 720
    const width = 720

    const handleTakePhoto = (dataUri: string) => {
        console.log('take photo')
        setDataUri(dataUri)
    }

    return (
        <>
            <Header title="Photobooth" />

            {(dataUri) ? <ImagePreview image={dataUri} height={height} width={width} /> : <Video handleTakePhoto={handleTakePhoto} height={height} width={width} />}

            <Footer />
        </>
    )
}
