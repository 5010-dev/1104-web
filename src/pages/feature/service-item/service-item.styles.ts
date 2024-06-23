import styled, { createGlobalStyle } from 'styled-components'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

const globalStyled = { createGlobalStyle }

export const ServiceItemContainer = styled(PageLayoutContainer)`
	position: relative;
`

export const ServiceItemDetialsGlobalStyle = globalStyled.createGlobalStyle`
	body {
		background-color: #000;
	}
`
