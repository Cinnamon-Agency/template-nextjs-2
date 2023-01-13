import emotionReset from 'emotion-reset'
import emotionNormalize from 'emotion-normalize'
import { css, Global } from '@emotion/react'
import { spacingCSSVars } from '../theme'

const styles = css`
	/* https://meyerweb.com/eric/tools/css/reset/ */
	${emotionReset};

	/* https://github.com/necolas/normalize.css/blob/master/normalize.css */
	/* normalizer is setting Y-axis margins on <h1> only. Don't be confused */
	${emotionNormalize};

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
