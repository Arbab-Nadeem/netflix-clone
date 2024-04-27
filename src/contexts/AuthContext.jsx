import { createContext, useContext, useState, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth, db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

//<> ===  Imported Components Ends === <>\\

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedShows: [],
		});
	}

	function signIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
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
