import { Outlet } from 'react-router-dom';

//<> ===  Imported Components Ends === <>\\

const AuthLayout = () => {
	return (
		<>
			<div className='w-full h-screen'>
				<img
					src='/assets/auth-bg.jpg'
					alt='auth-bg'
					className='hidden sm:block absolute w-full h-full object-cover'
				/>
				<div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>
				<Outlet />
			</div>
		</>
	);
};

export default AuthLayout;
