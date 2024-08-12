import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useDeviceType from './hooks/use-device-type'
import { useDeviceTypeStore } from './store/layout/device-type.store'
import { useToastMessageStore } from './store/layout/global-ui.store'

import DesignSystem from './styles/design-system/design-system.theme'
import GlobalStyle from './styles/global-style.styles'

import AppRoutes from './routes/app-routes'
import Toast from './components/global/toast/toast.component'

import './App.css'

function App() {
	const deviceType = useDeviceType()
	const updateDeviceType = useDeviceTypeStore((state) => state.updateDeviceType)

	const { toastMessgae, resetToastMessage } = useToastMessageStore()

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
						<AppRoutes />
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
