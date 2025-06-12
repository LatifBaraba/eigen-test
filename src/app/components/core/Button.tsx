import { Button, ButtonProps } from 'antd'
import React from 'react'

interface BasicButtonProps extends ButtonProps {
    //
}

const BasicButton: React.FC<BasicButtonProps> = ({
    type = 'default',
    loading = false,
    variant = 'outlined',
    className,
    children,
    onClick,
    ...rest
}) => {
    return (
        <Button className='!bg-sky-950 !rounded-2xl !px-8 !py-5 !text-white' type={type} loading={loading} onClick={onClick} variant={variant} {...rest}>
            {children}
        </Button>
    )
}

export default BasicButton
