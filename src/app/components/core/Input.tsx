import { Input } from 'antd'
import { InputProps } from 'antd/es/input'
import React from 'react'

interface BasicInputProps extends InputProps {
    type?: 'text' | 'password' | 'email' | 'number'
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BasicInput: React.FC<BasicInputProps> = ({ type = 'text', value, onChange, placeholder, className, ...props }) => {
    return (
        <Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`bg-amber-400 ${className}`}
            {...props}
        />
    )
}

export default BasicInput
