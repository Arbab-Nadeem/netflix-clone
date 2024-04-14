import { createContext, useContext, useState, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from '@/firebase';

//<> ===  Imported Components Ends === <>\\

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function signIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut();
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const value = {
		user,
		signUp,
		signIn,
		logOut,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired, // Validate children prop
};
export const useAuthContext = () => useContext(AuthContext);
