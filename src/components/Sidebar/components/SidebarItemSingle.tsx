import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface SidebarItemSingle {
	name: string
	route: string
}
const SidebarItemSingle: FC<SidebarItemSingle> = ({ name, route }) => {
	const pathname = usePathname()
	return (
		<li>
			<Link
				href={route}
				className={`first-letter:group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname.includes(route) &&
					'text-white'
				}`}
			>
				{name}
			</Link>
		</li>
	)
}

export default SidebarItemSingle