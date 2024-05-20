import { createGlobalStyle } from 'styled-components'
import designTokens from './degisn-tokens/design-tokens.tokens'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
	@font-face {
		font-family: 'SF_HambakSnow';
		src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}

	body {
		overflow-x: hidden;

		margin: 0;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		overscroll-behavior: none;

		background-color: ${designTokens.colour.grayscale[1000]};
		color: ${designTokens.colour.grayscale[0]};

		font-family: ${designTokens.typo.typeface.default}, -apple-system,
			BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
			'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'SF_HambakSnow',
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		line-height: ${designTokens.typo.leading.default};
		letter-spacing: ${designTokens.typo.kerning.default};
		text-align: center;
	}

	body * {
		margin: 0;
		box-sizing: border-box;
		word-break: keep-all;
		-webkit-tap-highlight-color: transparent;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`

export default GlobalStyle
