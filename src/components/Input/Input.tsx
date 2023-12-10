import React, { FC, HTMLInputTypeAttribute, ReactNode } from 'react'

interface InputProps {
	label: string,
	type: HTMLInputTypeAttribute,
	placeholder: string,
	value: string,
	iconSvg?: ReactNode,
	onChangeValue?: (e) => void
}

const Input: FC<InputProps> = ({ label, type, placeholder, value, iconSvg, onChangeValue }) => {
	return (
		<div className="mb-6">
			<label className="mb-2.5 block font-medium text-black dark:text-white">
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					placeholder={placeholder}
					className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
					value={value}
				// onChange={(e) => onChangeValue(e)}
				/>


				<span className="absolute right-4 top-4">
					{iconSvg ?? iconSvg}
				</span>
			</div>
		</div>
	)
}

export default Input