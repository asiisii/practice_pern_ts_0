const ImageLinkInput = () => {
	return (
		<div className='imageLinkInput'>
			<p className='f2'>
				{'Face Scanner will detect faces in your pictures. Give it a try.'}
			</p>
			<section className='imageLinkInput__section'>
				<div className='pa4 br3 shadow-5 imageLinkInput__section__wrapper'>
					<input
						className='f4 pa2 w-70 center'
						type='text'
						placeholder='Insert link here'
					/>
					<button className=' mt3 w-30 grow f4 link pv2 dib white bg-green  pointer imageLinkInput__section__wrapper__btn'>
						Scan
					</button>
				</div>
			</section>
		</div>
	)
}

export default ImageLinkInput
