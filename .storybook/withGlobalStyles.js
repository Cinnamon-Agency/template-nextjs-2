import { GlobalStyles } from '../src/styles/GlobalStyles'

// Injects global styles to stories
export const withGlobalStyles = S => (
	<>
		<GlobalStyles />
		<S />
	</>
)
