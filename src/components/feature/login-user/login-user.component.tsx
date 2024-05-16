import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../store/authDataStore'
import {
	useToastMessageStore,
	useNavigationStore,
} from '../../../store/globalUiStore'

import { signOutWithCallback } from '../../../services/auth/auth-service'

import { LoginUserContainer } from './login-user.styles'

import TextLink from '../../global/text-link/text-link.component'

export default function LoginUser() {
	const { resetLoginUser } = useAuthDataStore()
	const { updateToastMessage } = useToastMessageStore()
	const { updateIsMenuOpen } = useNavigationStore()
	const navigate = useNavigate()

	const handleViewAccount = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/account')
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		updateIsMenuOpen(false)
	}

	const handleSignOut = (e: MouseEvent<HTMLSpanElement>) => {
		signOutWithCallback(
			() => {
				resetLoginUser()
				updateToastMessage('성공적으로 로그아웃 되었습니다.')
			},
			(error) => updateToastMessage(error),
		)
	}

	return (
		<LoginUserContainer>
			<FontAwesomeIcon icon={faCircleUser} id="user-icon" />
			<TextLink
				id="view-account-link"
				text="내 정보"
				appearance="neutral"
				hierarchy="secondary"
				size="md"
				handleClick={handleViewAccount}
			/>
			{`|`}
			<TextLink
				text="로그아웃"
				appearance="neutral"
				hierarchy="secondary"
				size="md"
				handleClick={handleSignOut}
			/>
		</LoginUserContainer>
	)
}
