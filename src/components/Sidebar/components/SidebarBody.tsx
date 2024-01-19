import { FC, ReactNode } from 'react'

interface SidebarBodyProps {
	children: ReactNode
}

const SidebarBody: FC<SidebarBodyProps> = ({ children }) => {
	return (
		<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">			
			<nav className="mt-5 py-4 px-4">
				<ul className="mb-6 flex flex-col gap-1.5">
					{children}
				</ul>
			</nav>
		</div>
	)
}

export default SidebarBody