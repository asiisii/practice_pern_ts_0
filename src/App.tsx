import Navigation from './components/Navigation/Navigation'
import './App.css'
import Logo from './components/Logo/Logo'
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput'
import Rank from './components/Rank/Rank'

const App = () => {
	return (
		<div>
			<Navigation />
      <Logo />
      <Rank />
      <ImageLinkInput />
		</div>
	)
}

export default App
