import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
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
		navigate(ROUTES.ACCOUNT)
	}

	const handleSignOut = async (e: MouseEvent<HTMLSpanElement>) => {
		try {
			await logout()
			resetLoginUser()
			updateToastMessage('성공적으로 로그아웃 되었습니다.')
			navigate(ROUTES.HOME)
		} catch (error: any) {
			console.log(error.message)
		}
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
