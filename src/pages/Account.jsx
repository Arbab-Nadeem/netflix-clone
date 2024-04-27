//<> ===  Imported Components Ends === <>\\

import { SavedShows } from '@/components';

const Account = () => {
	return (
		<div className='w-full text-white'>
			<img
				src='/assets/auth-bg.jpg'
				alt='Account'
				className='w-full h-[400px] object-cover'
			/>
			<div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
				<div className='absolute top-[20%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-5xl font-bold'> My Shows</h1>
				</div>
			</div>
			<SavedShows />
		</div>
	);
};

export default Account;
