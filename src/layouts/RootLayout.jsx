import { Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

//<>---  Imported Components Ends ---<>\\

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default RootLayout;
