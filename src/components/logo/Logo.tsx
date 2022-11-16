import Tilt from 'react-parallax-tilt'
import scanner from '../../assets/scanner.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt'>
			<Tilt
				className='logo br4 shadow-2'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className='pa3'>
					<img
						src={scanner}
						alt='scanner icon'
						style={{
							height: '90px',
              width: '90px'
						}}
					/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo
