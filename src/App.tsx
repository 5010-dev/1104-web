import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDeviceTypeStore } from './store/deviceTypeStore'
import useDeviceType from './hooks/useDeviceType'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'
import MainLayout from './pages/main-layout'
import Home from './pages/feature/home/home.page'
import Login from './pages/feature/login/login.page'
import Products from './pages/feature/products/products.page'

import './App.css'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)

	useEffect(() => {
		updateDeviceType(deviceType)
	}, [deviceType, updateDeviceType])

	return (
		<Router>
			<ThemeProvider theme={DesignSystem}>
				<GlobalStyle />
				<div className="App">
					<Routes>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Home />} />
							<Route path="/products" element={<Products />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Login />} />
					</Routes>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
