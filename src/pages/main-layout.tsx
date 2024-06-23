import { Outlet } from 'react-router-dom'

import { useNavigationStore } from '../store/globalUiStore'

import Navigation from '../components/global/navigation/navigation.component'
import Footer from '../components/global/footer/footer.component'

export default function MainLayout() {
	const { showNavigation } = useNavigationStore()

	return (
		<>
			{showNavigation ? <Navigation /> : null}
			<Outlet />
			<Footer />
		</>
	)
}
