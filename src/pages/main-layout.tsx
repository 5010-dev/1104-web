import { Outlet } from 'react-router-dom'
import Navigation from '../components/global/navigation/navigation.component'
import Footer from '../components/global/footer/footer.component'

export default function MainLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	)
}
