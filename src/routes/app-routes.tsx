import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'

// import EventRoute from '../components/global/event-route/event-route.component'
import GuestOnlyRoute from '../components/global/guest-only-route/guest-only-route.component'
import PrivateRoute from '../components/global/private-route/private-route.component'

import MainLayout from '../pages/main-layout'
import NotFound from '../pages/global/not-found/not-found.page'

import Home from '../pages/feature/home/home.page'
import Auth from '../pages/feature/auth/auth.page'
import EmailVerification from '../pages/feature/email-verification/email-verification.page'
import Checkout from '../pages/feature/checkout/checkout.page'
import CheckoutSuccess from '../pages/feature/checkout/checkout-success/checkout-success.page'
import AboutUs from '../pages/feature/about-us/about-us.page'
import OurService from '../pages/feature/our-service/our-service.page'
import Account from '../pages/feature/account/account.page'
import FreeTrial from '../pages/feature/free-trial/free-trial.page'
import IndicatorRegistration from '../pages/feature/indicator-registration/indicator-registration.page'
// import PreOrder from '../pages/feature/pre-order/pre-order.page'
import Partnership from '../pages/feature/partnership/partnership.page'
import ServiceItem from '../pages/feature/service-item/service-item.page'

export default function AppRoutes() {
	return (
		<Routes>
			{/* <Route path={ROUTES.PRE_ORDER} element={<PreOrder />} /> */}
			{/* <Route element={<EventRoute />}> */}
			<Route path={ROUTES.HOME} element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path={ROUTES.ABOUT} element={<AboutUs />} />
				<Route path={ROUTES.SERVICE} element={<OurService />} />
				<Route path={ROUTES.SERVICE_ITEM.path} element={<ServiceItem />} />
				<Route path={ROUTES.PARTNERSHIP} element={<Partnership />} />

				<Route element={<PrivateRoute />}>
					<Route path={ROUTES.ACCOUNT} element={<Account />} />
				</Route>
			</Route>

			<Route path={ROUTES.VERIFICATION} element={<EmailVerification />} />
			<Route path={ROUTES.FREE_TRIAL} element={<FreeTrial />} />

			<Route element={<GuestOnlyRoute />}>
				<Route path={ROUTES.AUTH} element={<Auth />} />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path={ROUTES.CHECKOUT} element={<Checkout />} />
				<Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutSuccess />} />
				<Route path={ROUTES.REGISTRATION} element={<IndicatorRegistration />} />
			</Route>
			{/* </Route> */}

			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
