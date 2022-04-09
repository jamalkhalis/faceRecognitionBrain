import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Git it a try!'}
			</p>
			<div className='center pa4 br3 shadow-5 w-70-l'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
				<button 
					className='w-30 grow f4 link ph3 pv2 dib bg-light-purple' 
					onClick={onButtonSubmit}
				> 
					Detect 
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;