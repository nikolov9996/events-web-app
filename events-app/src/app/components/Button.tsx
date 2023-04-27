import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<"button"> {
    label: string,
}

const Button = ({ label, ...rest }: Props) =>
    <button {...rest} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4">
        {label}
    </button>
export default Button;