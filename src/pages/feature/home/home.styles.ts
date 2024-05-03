import styled from 'styled-components'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

type HomeContainerProps = {
	$imageUrl: string
}

export const HomeContainer = styled(PageLayoutContainer)<HomeContainerProps>`
	position: relative;

	height: ${({ theme }) => theme.layout.component.height};
	min-height: ${({ theme }) => theme.layout.component.minHeight};

	background-image: url(${(props) => props.$imageUrl});
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
		background-color: rgba(0, 0, 0, 0.15);
	}
`
