import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'

import { signOutWithCallback } from '../../../services/auth/auth-service'

import { LoginUserContainer } from './login-user.styles'

import TextLink from '../../global/text-link/text-link.component'

export default function LoginUser() {
	const { resetLoginUser } = useAuthDataStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigate()

	const handleViewAccount = (e: MouseEvent<HTMLSpanElement>) => {
		window.scrollTo({
			top: 0,
		})
		navigate('/account')
	}

	const handleSignOut = (e: MouseEvent<HTMLSpanElement>) => {
		signOutWithCallback(
			() => updateIsLoading(true),
			() => {
				resetLoginUser()
				updateToastMessage('성공적으로 로그아웃 되었습니다.')
			},
			(error) => updateToastMessage(error),
			() => updateIsLoading(false),
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
