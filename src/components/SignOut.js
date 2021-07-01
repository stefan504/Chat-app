import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',

				width: '100%',
				backgroundColor: '#FAFAFA',
				top: 0,
				borderBottom: 'solid 1px lightgray',
				zIndex: '10',
			}}
		>
			<button
				style={{
					padding: '20px',
					fontSize: '15px',
					borderRadius: '0',
					fontWeight: '600',
				}}
				onClick={() => auth.signOut()}
			>
				Log Out
			</button>
		</div>
	);
};

export default SignOut;
