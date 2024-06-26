/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

//<> ===  Imported Components Ends === <>\\

const Row = ({ rowId, title, fetchURL }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => setMovies(response.data.results));
	}, [fetchURL]);

	const slideLeft = () => {
		const slider = document.getElementById('slider' + rowId);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		const slider = document.getElementById('slider' + rowId);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft
					onClick={slideLeft}
					size={30}
					className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
				/>
				<div
					id={'slider' + rowId}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '
				>
					{movies.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					size={30}
					className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block right-0'
				/>
			</div>
		</>
	);
};

export default Row;
