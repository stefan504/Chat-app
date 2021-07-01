import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {
	return (
		<div>
			<button onClick={() => auth.signOut()}>Log Outs</button>
		</div>
	);
};

export default SignOut;
