import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<"input"> {
    label: string,
    re:any
}

const Input = ({ label,re, ...rest }: Props) => {
    return (
        <div className="mb-6 p-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            <input {...rest} {...re} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
        </div>
    )
}

export default Input