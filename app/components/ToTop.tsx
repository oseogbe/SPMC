"use client"

import ScrollToTop from 'react-scroll-to-top'

const ToTop = () => {
    return (
        <ScrollToTop
            smooth
            top={1000}
            color='#3C8E48'
            className='scroll-to-top'
        />
    )
}

export default ToTop