import React from 'react'
import './BlurContainer.css'

type Props = {
	w: number
	h: number
}

const BlurContainer: React.FC<Props> = ({ children, w, h }) => {
	return (
		<div
			className={'BlurContainer'}
			style={{
				width: w,
				height: h
			}}
		>
			{children}
		</div>
	)
}

export default BlurContainer
