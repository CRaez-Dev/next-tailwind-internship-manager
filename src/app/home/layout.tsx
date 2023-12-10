import React from 'react'

const HomeLayout = ({ children }: {
	children: React.ReactNode
}) => {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav>HomeLayout</nav>

			{children}
		</section>
	)
}

export default HomeLayout