import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useDeviceType from './hooks/use-device-type'
import { useDeviceTypeStore } from './store/layout/device-type.store'
import { useAuthDataStore } from './store/data/auth-data/auth-data.store'
import { useServiceDataStore } from './store/data/service-data/service-data.store'
import { useLoadingStore } from './store/layout/loading.store'
import { getLoginUserData, logout } from './services/auth/auth-service'
import { useToastMessageStore } from './store/layout/global-ui.store'

import { getRefreshToken } from './utils/token.utils'
import { getProductList } from './services/product/product-service'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'

import AppRoutes from './routes/app-routes'
import Loading from './components/global/loading/loading.component'
import Toast from './components/global/toast/toast.component'

import './App.css'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)
	const { updateLoginUser, updateIsUserDataLoaded, resetLoginUser } =
		useAuthDataStore()
	const { updateServiceList, updateIsServiceListDataLoaded } =
		useServiceDataStore()
	const { toastMessgae, resetToastMessage } = useToastMessageStore()
	const { isLoading, updateIsLoading } = useLoadingStore()

	useEffect(() => {
		updateDeviceType(deviceType)
	}, [deviceType, updateDeviceType])

	useEffect(() => {
		const fetchData = async () => {
			try {
				updateIsLoading(true)

				// 서비스 리스트 데이터 fetch (무조건 실행)
				const serviceListResponse = await getProductList()
				updateServiceList(serviceListResponse)
				updateIsServiceListDataLoaded(true)

				// 로그인 유저 데이터 fetch (조건부 실행)
				if (getRefreshToken()) {
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
				}
			} catch (error: any) {
				console.log(error.message)
				logout()
				resetLoginUser()
			} finally {
				updateIsLoading(false)
			}
		}

		fetchData()
	}, [
		updateIsLoading,
		updateServiceList,
		updateLoginUser,
		resetLoginUser,
		updateIsUserDataLoaded,
		updateIsServiceListDataLoaded,
	])

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
