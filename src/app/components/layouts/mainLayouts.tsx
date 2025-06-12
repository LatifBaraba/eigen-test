import React from 'react'
import Header from './header'

const MainLayouts = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <Header />
            {children}
        </div>
    )
}

export default MainLayouts
