import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div>
			<div className='relative mt2 w-70 w-50-l ma-0-auto' >
				<img id='inputImage' alt='' src={imageUrl} height='auto' />
				<div 
					className='bounding-box'
					style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
				>
				</div>
			</div>
		</div>
	)
}

export default FaceRecognition;