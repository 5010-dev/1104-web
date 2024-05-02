import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
	:root {
		--accent-color: #007bff;
		--neutral-color: #151515;
		--neutral-inverted-color: #ffffff;
		/* --system-color:  */

		--global-padding: 1rem;
		--global-rouning: 0.75rem;

		--colour-app-background: #0d0d0d;
		--colour-app-on-background-active: #ffffff;
		--colour-app-on-background-inactive: #ffffff80;
		--colour-app-on-background-pressed: #cfcfcf;
		--colour-app-on-background-hover: #ffffff;

		--colour-container-default-background-active: #0d0d0d;
		--colour-container-default-background-inactive: #0d0d0d80;
		--colour-container-default-background-pressed: #252525;
		--colour-container-default-background-hover: #3d3d3d;
		--colour-container-default-on-background-active: #ffffff;
		--colour-container-default-on-background-inactive: #ffffff80;
		--colour-container-default-on-background-pressed: #cfcfcf;
		--colour-container-default-on-background-hover: #ffffff;

		--colour-container-inverted-background-active: #ffffff;
		--colour-container-inverted-background-inactive: #ffffff80;
		--colour-container-inverted-background-pressed: #cfcfcf;
		--colour-container-inverted-background-hover: #ffffff;
		--colour-container-inverted-on-background-active: #0d0d0d;
		--colour-container-inverted-on-background-inactive: #0d0d0d80;
		--colour-container-inverted-on-background-pressed: #252525;
		--colour-container-inverted-on-background-hover: #3d3d3d;

		--colour-card-default-background-active: #252525;
		--colour-card-default-background-inactive: #25252580;
		--colour-card-default-background-pressed: #0d0d0d;
		--colour-card-default-background-hover: #3d3d3d;
		--colour-card-default-on-background-active: #ffffff;
		--colour-card-default-on-background-inactive: #ffffff80;
		--colour-card-default-on-background-pressed: #cfcfcf;
		--colour-card-default-on-background-hover: #ffffff;

		--colour-overlay-default-background-active: #252525;
		--colour-overlay-default-background-inactive: #25252580;
		--colour-overlay-default-background-pressed: #0d0d0d;
		--colour-overlay-default-background-hover: #3d3d3d;
		--colour-overlay-default-on-background-active: #ffffff;
		--colour-overlay-default-on-background-inactive: #ffffff80;
		--colour-overlay-default-on-background-pressed: #cfcfcf;
		--colour-overlay-default-on-background-hover: #ffffff;

		--colour-system-default-background-active: #ff0000;
		--colour-system-default-background-inactive: #ff000080;
		--colour-system-default-background-pressed: #c20202;
		--colour-system-default-background-hover: #ff6565;
		--colour-system-default-on-background-active: #ffffff;
		--colour-system-default-on-background-inactive: #ffffff80;
		--colour-system-default-on-background-pressed: #ffb7b7;
		--colour-system-default-on-background-hover: #ffdada;
		--colour-system-inverted-background-active: #ffffff;
		--colour-system-inverted-background-inactive: #ffffff80;
		--colour-system-inverted-background-pressed: #ffb7b7;
		--colour-system-inverted-background-hover: #ffdada;
		--colour-system-inverted-on-background-active: #ff0000;
		--colour-system-inverted-on-background-inactive: #ff000080;
		--colour-system-inverted-on-background-pressed: #c20202;
		--colour-system-inverted-on-background-hover: #ff6565;
		--colour-chip-default-background-active: #252525;
		--colour-chip-default-background-inactive: #25252580;
		--colour-chip-default-background-pressed: #0d0d0d;
		--colour-chip-default-background-hover: #3d3d3d;
		--colour-chip-default-on-background-active: #ffffff;
		--colour-chip-default-on-background-inactive: #ffffff80;
		--colour-chip-default-on-background-pressed: #cfcfcf;
		--colour-chip-default-on-background-hover: #ffffff;
		--colour-chip-inverted-background-active: #ffffff;
		--colour-chip-inverted-background-inactive: #ffffff80;
		--colour-chip-inverted-background-pressed: #cfcfcf;
		--colour-chip-inverted-background-hover: #ffffff;
		--colour-chip-inverted-on-background-active: #252525;
		--colour-chip-inverted-on-background-inactive: #25252580;
		--colour-chip-inverted-on-background-pressed: #0d0d0d;
		--colour-chip-inverted-on-background-hover: #3d3d3d;
		--colour-button-primary-background-active: #ffffff;
		--colour-button-primary-background-inactive: #ffffff80;
		--colour-button-primary-background-pressed: #cfcfcf;
		--colour-button-primary-background-hover: #ffffff;
		--colour-button-primary-on-background-active: #0d0d0d;
		--colour-button-primary-on-background-inactive: #0d0d0d80;
		--colour-button-primary-on-background-pressed: #252525;
		--colour-button-primary-on-background-hover: #3d3d3d;
		--colour-button-secondary-background-active: #252525;
		--colour-button-secondary-background-inactive: #25252580;
		--colour-button-secondary-background-pressed: #0d0d0d;
		--colour-button-secondary-background-hover: #3d3d3d;
		--colour-button-secondary-on-background-active: #ffffff;
		--colour-button-secondary-on-background-inactive: #ffffff80;
		--colour-button-secondary-on-background-pressed: #cfcfcf;
		--colour-button-secondary-on-background-hover: #ffffff;
		--colour-button-system-background-active: #ff0000;
		--colour-button-system-background-inactive: #ff000080;
		--colour-button-system-background-pressed: #c20202;
		--colour-button-system-background-hover: #ff6565;
		--colour-button-system-on-background-active: #ffffff;
		--colour-button-system-on-background-inactive: #ffffff80;
		--colour-button-system-on-background-pressed: #ffb7b7;
		--colour-button-system-on-background-hover: #ffdada;

		--typo-route-title-font-family: Pretendard Variable;
		--typo-route-title-font-weight: 900;
		--typo-route-title-line-height: 150%;
		--typo-route-title-font-size: 1.75rem;

		--typo-route-sectiontitle-font-family: Pretendard Variable;
		--typo-route-sectiontitle-font-weight: 700;
		--typo-route-sectiontitle-line-height: 150%;
		--typo-route-sectiontitle-font-size: 1.25rem;

		--typo-route-body-font-family: Pretendard Variable;
		--typo-route-body-font-weight: 400;
		--typo-route-body-line-height: 150%;
		--typo-route-body-font-size: 1rem;

		--typo-card-title-font-family: Pretendard Variable;
		--typo-card-title-font-weight: 700;
		--typo-card-title-line-height: 150%;
		--typo-card-title-font-size: 1rem;

		--typo-card-body-font-family: Pretendard Variable;
		--typo-card-body-font-weight: 400;
		--typo-card-body-line-height: 150%;
		--typo-card-body-font-size: 1rem;

		--typo-card-caption-font-family: Pretendard Variable;
		--typo-card-caption-font-weight: 200;
		--typo-card-caption-line-height: 150%;
		--typo-card-caption-font-size: 0.75rem;

		--typo-button-lg-text-font-family: Pretendard Variable;
		--typo-button-lg-text-font-weight: 700;
		--typo-button-lg-text-line-height: 150%;
		--typo-button-lg-text-font-size: 1.25rem;

		--typo-button-md-text-font-family: Pretendard Variable;
		--typo-button-md-text-font-weight: 700;
		--typo-button-md-text-line-height: 150%;
		--typo-button-md-text-font-size: 1rem;

		--typo-toast-body-font-family: Pretendard Variable;
		--typo-toast-body-font-weight: 700;
		--typo-toast-body-line-height: 150%;
		--typo-toast-body-font-size: 1rem;

		--typo-overlay-title-font-family: Pretendard Variable;
		--typo-overlay-title-font-weight: 700;
		--typo-overlay-title-line-height: 150%;
		--typo-overlay-title-font-size: 1.25rem;

		--typo-overlay-body-font-family: Pretendard Variable;
		--typo-overlay-body-font-weight: 400;
		--typo-overlay-body-line-height: 150%;
		--typo-overlay-body-font-size: 1rem;

		--typo-overlay-caption-font-family: Pretendard Variable;
		--typo-overlay-caption-font-weight: 200;
		--typo-overlay-caption-line-height: 150%;
		--typo-overlay-caption-font-size: 0.75rem;

		--typo-chip-active-font-family: Pretendard Variable;
		--typo-chip-active-font-weight: 700;
		--typo-chip-active-line-height: 150%;
		--typo-chip-active-font-size: 1rem;

		--typo-chip-inactive-font-family: Pretendard Variable;
		--typo-chip-inactive-font-weight: 400;
		--typo-chip-inactive-line-height: 150%;
		--typo-chip-inactive-font-size: 1rem;

		--typo-chip-caption-font-family: Pretendard Variable;
		--typo-chip-caption-font-weight: 200;
		--typo-chip-caption-line-height: 150%;
		--typo-chip-caption-font-size: 0.75rem;

		--typo-h1-font-family: Pretendard Variable;
		--typo-h1-font-weight: 900;
		--typo-h1-line-height: 150%;
		--typo-h1-font-size: 1.75rem;

		--typo-h2-font-family: Pretendard Variable;
		--typo-h2-font-weight: 700;
		--typo-h2-line-height: 150%;
		--typo-h2-font-size: 1.25rem;

		--typo-h3-font-family: Pretendard Variable;
		--typo-h3-font-weight: 700;
		--typo-h3-line-height: 150%;
		--typo-h3-font-size: 1rem;

		--typo-body-font-family: Pretendard Variable;
		--typo-body-font-weight: 400;
		--typo-body-line-height: 150%;
		--typo-body-font-size: 1rem;

		--typo-caption-font-family: Pretendard Variable;
		--typo-caption-font-weight: 200;
		--typo-caption-line-height: 150%;
		--typo-caption-font-size: 0.75rem;

		--grid-app-max-width: 70rem;
		--grid-app-min-width: 20rem;
		--grid-app-margin: 1.5rem;
		--grid-app-gutter: 1rem;

		--radii-iconbutton-container: 0.5rem;
		--radii-card-container: 1rem;
		--radii-xxsm: 0.25rem;
		--radii-xsm: 0.5rem;
		--radii-sm: 1rem;
		--radii-md: 1.5rem;
		--radii-lg: 2rem;
		--radii-xlg: 2.5rem;

		--padding-card-container: 1.5rem;
		--spacing-card-container: 1rem;

		--spacing-xxxsm: 0.25rem;
		--spacing-xxsm: 0.5rem;
		--spacing-xsm: 1rem;
		--spacing-sm: 1.5rem;
		--spacing-md: 2rem;
		--spacing-lg: 2.5rem;
		--spacing-xlg: 3rem;
		--spacing-xxlg: 4rem;
		--spacing-xxxlg: 10rem;

		--accent-primary-default-active: #3879fa;
		--accent-primary-default-inactive: #3879fa80;
		--accent-primary-default-pressed: #0c37ee;
		--accent-primary-default-hover: #5ca0fc;
		--accent-primary-inverted-active: #ffffff;
		--accent-primary-inverted-inactive: #ffffff80;
		--accent-primary-inverted-pressed: #5ca0fc;
		--accent-primary-inverted-hover: #c3dcff;

		--neutral-primary-default-active: #0d0d0d;
		--neutral-primary-default-inactive: #0d0d0d80;
		--neutral-primary-default-pressed: #252525;
		--neutral-primary-default-hover: #3d3d3d;
		--neutral-primary-inverted-active: #ffffff;
		--neutral-primary-inverted-inactive: #ffffff80;
		--neutral-primary-inverted-pressed: #cfcfcf;
		--neutral-primary-inverted-hover: #ffffff;
		--neutral-secondary-default-active: #252525;
		--neutral-secondary-default-inactive: #25252580;
		--neutral-secondary-default-pressed: #0d0d0d;
		--neutral-secondary-default-hover: #3d3d3d;
		--neutral-secondary-inverted-active: #ffffff;
		--neutral-secondary-inverted-inactive: #ffffff80;
		--neutral-secondary-inverted-pressed: #cfcfcf;
		--neutral-secondary-inverted-hover: #ffffff;

		--system-primary-default-active: #ff0000;
		--system-primary-default-inactive: #ff000080;
		--system-primary-default-pressed: #c20202;
		--system-primary-default-hover: #ff6565;
		--system-primary-inverted-active: #ffffff;
		--system-primary-inverted-inactive: #ffffff80;
		--system-primary-inverted-pressed: #ffb7b7;
		--system-primary-inverted-hover: #ffdada;

		--grayscale-0: #ffffff;
		--grayscale-50: #f3f3f3;
		--grayscale-100: #e7e7e7;
		--grayscale-200: #cfcfcf;
		--grayscale-300: #b6b6b6;
		--grayscale-400: #9e9e9e;
		--grayscale-500: #868686;
		--grayscale-600: #6e6e6e;
		--grayscale-700: #555555;
		--grayscale-800: #3d3d3d;
		--grayscale-900: #252525;
		--grayscale-1000: #0d0d0d;

		--pointblue-50: #c3dcff;
		--pointblue-100: #87c5fe;
		--pointblue-200: #5ca0fc;
		--pointblue-300: #3879fa;
		--pointblue-400: #1e55f5;
		--pointblue-500: #0c37ee;
		--pointblue-600: #021fdf;
		--pointblue-700: #000fba;
		--pointblue-800: #000472;
		--pointblue-900: #000033;

		--systemred-50: #ffeded;
		--systemred-100: #ffdada;
		--systemred-200: #ffb7b7;
		--systemred-300: #ff9090;
		--systemred-400: #ff6565;
		--systemred-500: #ff3636;
		--systemred-600: #ff0000;
		--systemred-700: #c20202;
		--systemred-800: #850101;
		--systemred-900: #470000;

		--font-weight-lt: 200;
		--font-weight-md: 400;
		--font-weight-hv: 700;
		--font-weight-xhv: 900;
		--font-leading-narrow: 100%;
		--font-leading-default: 150%;
		--font-size-sm: 0.75rem;
		--font-size-md: 1rem;
		--font-size-lg: 1.25rem;
		--font-size-xlg: 1.75rem;
		--font-typeface: Pretendard Variable;
	}

	body {
		margin: 0;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		overscroll-behavior: none;

		background-color: #151515;
		color: #ffffff;

		font-family: var(--font-typeface), -apple-system, BlinkMacSystemFont,
			system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
			'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		line-height: var(--font-leading-default);
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
