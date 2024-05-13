import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDeviceTypeStore } from './store/deviceTypeStore'
import useDeviceType from './hooks/useDeviceType'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'
import MainLayout from './pages/main-layout'
import Home from './pages/feature/home/home.page'
import Login from './pages/feature/login/login.page'
import Signup from './pages/feature/signup/signup.page'
import EmailVerification from './pages/feature/email-verification/email-verification.page'
import About from './pages/feature/about/about.page'

import './App.css'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)

	useEffect(() => {
		updateDeviceType(deviceType)
	}, [deviceType, updateDeviceType])

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
							<Route path="/signup" element={<Signup />} />
							<Route path="/verification" element={<EmailVerification />} />
						</Routes>
					</div>
				</ThemeProvider>
			</Router>
		</HelmetProvider>
	)
}

export default App
