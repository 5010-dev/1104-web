import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'

import EventRoute from '../components/global/event-route/event-route.component'
import GuestOnlyRoute from '../components/global/guest-only-route/guest-only-route.component'
import PrivateRoute from '../components/global/private-route/private-route.component'

import MainLayout from '../pages/main-layout'
import NotFound from '../pages/global/not-found/not-found.page'

import Home from '../pages/feature/home/home.page'
import Login from '../pages/feature/login/login.page'
import EmailVerification from '../pages/feature/email-verification/email-verification.page'
import Checkout from '../pages/feature/checkout/checkout.page'
import CheckoutSuccess from '../pages/feature/checkout/checkout-success/checkout-success.page'
import CheckoutFail from '../pages/feature/checkout/checkout-fail/checkout-fail.page'
import AboutUs from '../pages/feature/about-us/about-us.page'
import OurService from '../pages/feature/our-service/our-service.page'
import Account from '../pages/feature/account/account.page'
import IndicatorRegistration from '../pages/feature/indicator-registration/indicator-registration.page'
import PreOrder from '../pages/feature/pre-order/pre-order.page'
import ServiceItem from '../pages/feature/service-item/service-item.page'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.PRE_ORDER} element={<PreOrder />} />

			<Route element={<EventRoute />}>
				<Route path={ROUTES.HOME} element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.ABOUT} element={<AboutUs />} />
					<Route path={ROUTES.SERVICE} element={<OurService />} />
					<Route path={ROUTES.SERVICE_ITEM.path} element={<ServiceItem />} />

					<Route element={<PrivateRoute />}>
						<Route path={ROUTES.ACCOUNT} element={<Account />} />
					</Route>
				</Route>

				<Route element={<GuestOnlyRoute />}>
					<Route path={ROUTES.LOGIN} element={<Login />} />
					<Route path={ROUTES.VERIFICATION} element={<EmailVerification />} />
				</Route>

				<Route element={<PrivateRoute />}>
					<Route path={ROUTES.CHECKOUT} element={<Checkout />} />
					<Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutSuccess />} />
					<Route path={ROUTES.CEHCKOUT_FAIL} element={<CheckoutFail />} />
					<Route
						path={ROUTES.REGISTRATION}
						element={<IndicatorRegistration />}
					/>
				</Route>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
