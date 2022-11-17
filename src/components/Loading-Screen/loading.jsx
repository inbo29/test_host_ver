import React from 'react'
import {Background, LoadingText} from './style';
import Image from 'next/image';
import Spinner from '../../../public/video/Spinner.gif';

const loading = () => {
	return (
		<Background>
			<LoadingText>BAYC</LoadingText>
			<Image
				src={Spinner}
				alt="Spinner gif"
				width={50}
			/>
		</Background>
	)
}

export default loading