import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';

//<> ===  Imported Components Ends === <>\\

const Navbar = () => {
	const { user, logOut } = useAuthContext();
	const navigate = useNavigate();
	// console.log(user);
	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
			<Link to={'/'}>
				<h1 className='text-red-600 text-4xl font-extrabold cursor-pointer'>
					Netflix
				</h1>
			</Link>
			{user.email ? (
				<div>
					<Link to={'/account'}>
						<button className='text-white pr-4'>Account</button>
					</Link>

					<button
						className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to={'/sign-in'}>
						<button className='text-white pr-4'>Sign In</button>
					</Link>
					<Link to={'/sign-up'}>
						<button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
