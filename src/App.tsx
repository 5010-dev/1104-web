import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useDeviceType from './hooks/useDeviceType'
import { useDeviceTypeStore } from './store/deviceTypeStore'
import { useAuthDataStore } from './store/authDataStore'
import { useLoadingStore } from './store/loadingStore'
import { getLoginUserData, logout } from './services/auth/auth-service'
import { useToastMessageStore } from './store/globalUiStore'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'

import AppRoutes from './routes/app-routes'
import Loading from './components/global/loading/loading.component'
import Toast from './components/global/toast/toast.component'

import './App.css'
import { getRefreshToken } from './utils/token.utils'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)
	const { updateLoginUser, updateIsUserDataLoaded, resetLoginUser } =
		useAuthDataStore()
	const { toastMessgae, resetToastMessage } = useToastMessageStore()
	const { isLoading, updateIsLoading } = useLoadingStore()

	useEffect(() => {
		updateDeviceType(deviceType)
	}, [deviceType, updateDeviceType])

	useEffect(() => {
		const fetchLoginUserData = async () => {
			if (!getRefreshToken()) {
				return
			}

			try {
				updateIsLoading(true)
				updateIsUserDataLoaded(false)

				const { email: loginEmail, is_email_verified } =
					await getLoginUserData()

				if (is_email_verified) {
					updateLoginUser('userId', loginEmail)
					updateLoginUser('isEmailValified', is_email_verified)
					updateIsUserDataLoaded(true)
				} else {
					logout()
					resetLoginUser()
				}
			} catch (error: any) {
				logout()
				resetLoginUser()
				console.log(error.message)
			} finally {
				updateIsLoading(false)
			}
		}

		fetchLoginUserData()
	}, [updateIsLoading, updateLoginUser, resetLoginUser, updateIsUserDataLoaded])

	return (
		<HelmetProvider>
			<Helmet>
				<meta name="theme-color" content="#151515" />
			</Helmet>
			<Router>
				<ThemeProvider theme={DesignSystem}>
					<GlobalStyle />
					<div className="App">
						<AppRoutes />
						{toastMessgae.length !== 0 ? (
							<Toast
								text={toastMessgae}
								duration={3000}
								onClose={resetToastMessage}
							/>
						) : null}
						{isLoading ? <Loading /> : null}
					</div>
				</ThemeProvider>
			</Router>
		</HelmetProvider>
	)
}

export default App
