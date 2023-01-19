import { css, Global } from '@emotion/react'
import { spacingCSSVars } from '../theme'

const styles = css`
	* {
		font-family: 'Inter', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		${spacingCSSVars};
	}
`

export const GlobalStyles = () => <Global styles={styles} />
