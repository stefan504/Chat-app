import React from 'react';
import { auth } from '../firebase';
import firebase from 'firebase';

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				height: '100vh',
				alignItems: 'center',
			}}
		>
			<button
				style={{
					padding: '30px',
					fontSize: '20px',
					borderRadius: '0',
					fontWeight: '600',
				}}
				onClick={signInWithGoogle}
			>
				Sign in with Google
			</button>
		</div>
	);
}

export default SignIn;
