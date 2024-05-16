import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useAuthDataStore } from './store/authDataStore'
import { useDeviceTypeStore } from './store/deviceTypeStore'
import useDeviceType from './hooks/useDeviceType'
import { getLoginUserDataWithCallback } from './services/auth/auth-service'
import { useToastMessageStore } from './store/toastMessageStore'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'
import MainLayout from './pages/main-layout'
import Home from './pages/feature/home/home.page'
import Login from './pages/feature/login/login.page'
import EmailVerification from './pages/feature/email-verification/email-verification.page'
import About from './pages/feature/about/about.page'
import Toast from './components/global/toast/toast.component'

import './App.css'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)
	const { updateLoginUser } = useAuthDataStore()
	const { toastMessgae, resetToastMessage } = useToastMessageStore()

	useEffect(() => {
		updateDeviceType(deviceType)
	}, [deviceType, updateDeviceType])

	useEffect(() => {
		const fetchData = async () => {
			await getLoginUserDataWithCallback(
				(loginId) => {
					updateLoginUser(loginId)
				},
				(error) => console.log(error),
			)
		}
		fetchData()
	}, [updateLoginUser])

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
							<Route path="/" element={<MainLayout />}>
								<Route index element={<Home />} />
								<Route path="/about" element={<About />} />
							</Route>
							<Route path="/login" element={<Login />} />
							<Route path="/verification" element={<EmailVerification />} />
						</Routes>
						{toastMessgae.length !== 0 ? (
							<Toast
								text={toastMessgae}
								duration={3000}
								onClose={resetToastMessage}
							/>
						) : null}
					</div>
				</ThemeProvider>
			</Router>
		</HelmetProvider>
	)
}

export default App
