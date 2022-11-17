import Navigation from './components/Navigation/Navigation'
import './App.css'
import Logo from './components/Logo/Logo'
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput'
import Rank from './components/Rank/Rank'
import { useState } from 'react'

const App = () => {
	const [userInput, setUserInput] = useState<string>('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value)
	}

	const handleScan = () => {
		console.log('====================================')
		console.log('scan!!')
		console.log('====================================')
	}
	return (
		<div>
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkInput handleChange={handleChange} handleScan={handleScan} />
		</div>
	)
}

export default App
