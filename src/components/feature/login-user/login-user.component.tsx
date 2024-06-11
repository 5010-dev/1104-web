import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import { logout } from '../../../services/auth/auth-service'

import { LoginUserContainer } from './login-user.styles'

import TextLink from '../../global/text-link/text-link.component'

export default function LoginUser() {
	const resetLoginUser = useAuthDataStore((state) => state.resetLoginUser)
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const navigate = useNavigateWithScroll()

	const handleViewAccount = (e: MouseEvent<HTMLSpanElement>) => {
		window.scrollTo({
			top: 0,
		})
		navigate('/account')
	}

	const handleSignOut = async (e: MouseEvent<HTMLSpanElement>) => {
		try {
			await logout()
			resetLoginUser()
			updateToastMessage('성공적으로 로그아웃 되었습니다.')
			navigate('/')
		} catch (error: any) {
			console.log(error.message)
		}

		// logoutWithCallback(
		// 	() => {
		// 		resetLoginUser()
		// 		updateToastMessage('성공적으로 로그아웃 되었습니다.')
		// 		navigate('/')
		// 	},
		// 	(error) => {
		// 		console.log(error)
		// 	},
		// )
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
