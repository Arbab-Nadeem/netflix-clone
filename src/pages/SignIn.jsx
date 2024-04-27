import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { useState } from 'react';

//<> ===  Imported Components Ends === <>\\

const SignIn = () => {
	const [loading, setLoading] = useState(false);
	const { signIn } = useAuthContext();
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setLoading(true);

		try {
			await signIn(formData.email, formData.password);
			navigate('/');
			setFormData({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='fixed w-full px-4 py-24 z-50'>
			<div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
				<div>
					<Link to='/'>
						<h1 className='text-red-600 font-extrabold text-3xl uppercase text-center pt-8'>
							Netflix
						</h1>
					</Link>
					<div className='max-w-[320px] mx-auto py-8'>
						<h1 className='text-3xl font-bold'>Sign In</h1>
						{error && (
							<p className='text-red-600 bg-gray-900/60 p-2 mt-2'>{error}</p>
						)}
						<form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
							<input
								type='email'
								name='email'
								placeholder='Email'
								autoComplete='email'
								className='p-3 my-2 bg-gray-800 rounded'
								value={formData.email}
								onChange={(e) => handleChange(e)}
							/>
							<input
								type='password'
								name='password'
								placeholder='Password'
								autoComplete='current-password'
								className='p-3 my-2 bg-gray-800 rounded'
								value={formData.password}
								onChange={(e) => handleChange(e)}
							/>
							<button className='bg-red-600 py-3 my-6 rounded font-bold'>
								{loading ? 'Loading...' : 'Sign In'}
							</button>
							<div className='flex justify-between items-center text-sm text-gray-500'>
								<p>
									<input type='checkbox' className='mr-2' />
									Remember me
								</p>
								<p>Need help?</p>
							</div>
							<p className='py-8'>
								<span className='text-gray-600 pr-2'>
									{`Don't`} have an Account yet?
								</span>
								<Link to='/sign-up'>Sign Up</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
