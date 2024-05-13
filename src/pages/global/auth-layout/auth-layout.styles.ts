import styled, { css, createGlobalStyle } from 'styled-components'

import loginImage from '../../../assets/img/login-image.webp'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

const globalStyled = { createGlobalStyle }

export const AuthGlobalStyle = globalStyled.createGlobalStyle`
	body {
		background-color: #000;
	}
`

export const AuthLayoutContainer = styled(PageLayoutContainer)`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	background-image: url(${loginImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0)
		);

		z-index: 1;
	}

	& > * {
		z-index: 2;
	}

	#login-card {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 26rem;

		padding: ${({ theme }) => theme.layout.section.padding.default};

		background: ${({ theme }) =>
			`linear-gradient(to bottom, ${hexToRgba(
				theme.colour.neutral.primary.active,
				0.5,
			)}, ${hexToRgba(theme.colour.accent.primary.active, 0.25)})`};

		-webkit-backdrop-filter: blur(1rem);
		backdrop-filter: blur(1rem);

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 2rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 1)}
			);
			filter: drop-shadow(
				0 0 2rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 1)}
			);
		`}

		div#top-row {
			width: 100%;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			margin-bottom: ${({ theme }) => theme.layout.page.gutter};

			img#company-logo {
				width: 3.5rem;
				opacity: 0.25;
			}

			button#close-icon {
				all: unset;
				cursor: pointer;

				position: relative;

				display: flex;
				justify-content: flex-end;
				align-items: center;

				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;

				font-size: 1.5rem;
				color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)};

				&::before {
					content: '';
					position: absolute;
					top: -1rem;
					right: -1rem;
					bottom: -1rem;
					left: -1rem;
				}
			}
		}

		div#login-container {
			width: 100%;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			h1#heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			form#login-form {
				width: 100%;
				max-width: 18rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: ${({ theme }) => theme.layout.container.gutter};

				.login-input {
					width: 100%;
				}

				#submit-button {
					width: 100%;
					box-sizing: border-box;
					margin-top: ${({ theme }) => theme.layout.container.gutter};
				}
			}
		}

		div#bottom-row {
			width: 100%;
			margin-top: ${({ theme }) => theme.layout.container.gutter};
		}
	}
`
