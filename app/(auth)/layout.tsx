import React from 'react';

export default function signinLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className=''>
			<div className='p-5 border-b text-center'>banner</div>
			{children}
		</div>
	);
}
