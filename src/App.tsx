import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useDeviceTypeStore } from './store/deviceTypeStore'
import useDeviceType from './hooks/useDeviceType'
import { useAuthDataStore } from './store/authDataStore'
import { useLoadingStore } from './store/loadingStore'
import { getLoginUserData, logout } from './services/auth/auth-service'
import { useToastMessageStore } from './store/globalUiStore'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'

// import EventRoute from './components/global/event-route/event-route.component'
// import GuestOnlyRoute from './components/global/\bguest-only-route/guest-only-route.component'
// import PrivateRoute from './components/global/private-route/private-route.component'

// import MainLayout from './pages/main-layout'
// import Home from './pages/feature/home/home.page'
// import Login from './pages/feature/login/login.page'
// import EmailVerification from './pages/feature/email-verification/email-verification.page'
// import Checkout from './pages/feature/checkout/checkout.page'
// import AboutUs from './pages/feature/about-us/about-us.page'
// import OurService from './pages/feature/our-service/our-service.page'
// import Account from './pages/feature/account/account.page'
// import IndicatorRegistration from './pages/feature/indicator-registration/indicator-registration.page'
import PreOrder from './pages/feature/pre-order/pre-order.page'
import EventSuccess from './pages/feature/event-success/event-success.page'
import NotFound from './pages/global/not-found/not-found.page'

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
				updateIsUserDataLoaded(true)
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
						<Routes>
							<Route path="/" element={<PreOrder />} />
							<Route path="/success" element={<EventSuccess />} />

							{/* <Route element={<EventRoute />}>
								<Route path="/" element={<MainLayout />}>
									<Route index element={<Home />} />
									<Route path="/about" element={<AboutUs />} />
									<Route path="/service" element={<OurService />} />

									<Route element={<PrivateRoute />}>
										<Route path="/account" element={<Account />} />
									</Route>
								</Route>

								<Route element={<GuestOnlyRoute />}>
									<Route path="/login" element={<Login />} />
									<Route path="/verification" element={<EmailVerification />} />
								</Route>

								<Route element={<PrivateRoute />}>
									<Route path="/checkout" element={<Checkout />} />
									<Route
										path="/registration"
										element={<IndicatorRegistration />}
									/>
								</Route>
							</Route> */}

							<Route path="*" element={<NotFound />} />
						</Routes>
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
