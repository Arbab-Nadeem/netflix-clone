import { Route, Routes } from 'react-router-dom';
import { RootLayout, AuthLayout } from '@/layouts/';
import { ProtectedRoute } from '@/components';
import { Home, SignIn, SignUp, Account } from '@/pages';

//<> ===  Imported Components Ends === <>\\

function App() {
	return (
		<>
			<Routes>
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Route>
				<Route
					path='/account'
					element={
						<ProtectedRoute>
							<Account />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
