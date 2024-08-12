import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'

import NotFound from '../pages/global/not-found/not-found.page'

import PreOrder from '../pages/feature/pre-order/pre-order.page'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.HOME}>
				<Route index element={<PreOrder />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
